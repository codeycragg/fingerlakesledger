import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'))

  return filenames.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }))
}

export default async function Post({ params }: Props) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')

  const { content, data } = matter(source)

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <time className="text-sm text-gray-600">
        {new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
      <h1 className="text-4xl font-bold mt-4 mb-8">{data.title}</h1>
      {data.description && <p className="text-xl mb-8 text-gray-700">{data.description}</p>}
      <div className="prose max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  )
}
