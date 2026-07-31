export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur z-10">
      <span className="text-sm font-medium tracking-tight">mlab817.dev</span>
      <div className="hidden sm:flex gap-6">
        {['About', 'Work', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="text-sm px-4 py-1.5 rounded-lg border border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
      >
        Let's talk
      </a>
    </nav>
  )
}
