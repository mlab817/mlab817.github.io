import { Link } from 'react-router-dom'
import { getPosts } from '../lib/posts'

export default function Blog() {
  const posts = getPosts()

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-8 py-20">
      <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
        ← back
      </Link>
      <p className="text-xs uppercase tracking-widest text-gray-400 mt-10 mb-2">Writing</p>
      <h1 className="text-3xl font-medium tracking-tight mb-12">Things I figured out the hard way.</h1>

      <div className="flex flex-col gap-0">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className={`group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 ${i !== 0 ? 'border-t border-gray-100' : ''} hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors`}
          >
            <span className="text-xs text-gray-400 shrink-0 tabular-nums">{post.date}</span>
            <div>
              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{post.title}</span>
              <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
