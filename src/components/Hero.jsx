export default function Hero() {
  return (
    <div className="px-8 pt-20 pb-16 max-w-3xl">
      <div className="inline-flex items-center gap-2 text-sm text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        Apps that bring value to people
      </div>

      <h1 className="text-5xl sm:text-6xl font-medium leading-[1.1] tracking-tight mb-4">
        I like the<br />
        <span className="text-blue-600">hard problems.</span>
      </h1>

      <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-8">
        Full-stack dev open to full-time and freelance work. I've shipped apps for government agencies, startups, and everything in between. If the problem is complex, I'm interested.
      </p>

      <div className="flex gap-3 flex-wrap">
        <a
          href="#projects"
          className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          See my work
        </a>
        <a
          href="https://github.com/mlab817"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 text-sm border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
        >
          github.com/mlab817
        </a>
      </div>

      <div className="flex gap-8 mt-12 pt-8 border-t border-gray-100 flex-wrap">
        {[
          { val: '3+', label: 'Years production' },
          { val: '200+', label: 'Gov. users served' },
          { val: '4', label: 'Production apps' },
          { val: 'UP', label: 'Diliman alumnus' },
        ].map(({ val, label }) => (
          <div key={label}>
            <div className="text-2xl font-medium tracking-tight">{val}</div>
            <div className="text-sm text-gray-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
