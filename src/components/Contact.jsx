export default function Contact() {
  return (
    <section id="contact" className="px-8 py-16 border-t border-gray-100">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">Contact</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
        <input
          type="text"
          placeholder="Your name"
          className="px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-gray-400"
        />
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-gray-400"
        />
        <input
          type="text"
          placeholder="Subject"
          className="sm:col-span-2 px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-gray-400"
        />
        <textarea
          placeholder="Tell me about your idea..."
          rows={5}
          className="sm:col-span-2 px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
        />
        <button className="sm:col-span-2 px-5 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Send message
        </button>
      </div>

      <div className="flex gap-3 flex-wrap mt-8 pt-8 border-t border-gray-100 max-w-lg">
        <a
          href="mailto:mlab817@gmail.com"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-gray-300 bg-gray-50 transition-colors"
        >
          mlab817@gmail.com
        </a>
        <a
          href="https://github.com/mlab817"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-gray-300 bg-gray-50 transition-colors"
        >
          github.com/mlab817
        </a>
      </div>
    </section>
  )
}
