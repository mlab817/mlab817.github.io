import { useParams, Link } from 'react-router-dom'
import { getPost } from '../lib/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen max-w-3xl mx-auto px-8 py-20">
        <Link to="/blog" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">← back</Link>
        <p className="mt-12 text-gray-500">Post not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-8 py-20">
      <Link to="/blog" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
        ← writing
      </Link>
      <p className="text-xs text-gray-400 mt-10 mb-3 tabular-nums">{post.date}</p>
      <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-snug mb-12">{post.title}</h1>
      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}
