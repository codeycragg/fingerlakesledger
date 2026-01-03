import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

type Post = {
  slug: string
  title: string
  date: string
  description?: string
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'))

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      description: data.description,
    }
  })

  return posts.sort((a, b) => (b.date > a.date ? 1 : -1))
}

export default async function Blog() {
  const posts = await getPosts()

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog & Tax Tips</h1>
      <p className="text-lg mb-12">
        Practical advice for landlords and small businesses in the Finger Lakes region.
      </p>

      {posts.length === 0 ? (
        <p>No posts yet — check back soon!</p>
      ) : (
        <div className="space-y-12">
          {posts.map(post => (
            <article key={post.slug} className="border-b pb-8">
              <time className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <h2 className="text-2xl font-bold mt-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              {post.description && <p className="mt-3 text-lg">{post.description}</p>}
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-4 inline-block">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
