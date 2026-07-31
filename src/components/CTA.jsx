export default function CTA() {
  return (
    <div className="px-8 py-20 border-t border-gray-100">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-5">Let's build together</p>
      <h2 className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.12] mb-5">
        Got an idea?<br />
        Let's make the <span className="text-blue-600">next viral app.</span>
      </h2>
      <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
        Need someone to build it, or just think it through? Either works.
      </p>
      <a
        href="#contact"
        className="inline-block px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Let's talk ↓
      </a>
      <p className="text-sm text-gray-400 mt-4">
        Don't know where to start?{' '}
        <a href="#contact" className="text-blue-500 hover:underline">
          That's literally what I'm here for.
        </a>
      </p>
    </div>
  )
}
