const projects = [
  {
    icon: '🌾',
    bg: '#f0fdf4',
    name: 'PIPS',
    desc: 'Government-wide investment tracking system for the Department of Agriculture. Built and maintained solo, used by 200–300 people across multiple agencies.',
    highlight: '200–300 active gov. users',
    tag: 'Laravel · React',
    links: [],
  },
  {
    icon: '📞',
    bg: '#eff6ff',
    name: 'Tellycom',
    desc: 'Flutter marketplace app connecting hosts and clients for appointment-based services — bookings, payments, and live conference calls, all in one app.',
    highlight: 'Production Flutter app',
    tag: 'Flutter · Dart',
    links: [
      { label: 'tellycom.io', href: 'https://tellycom.io' },
      { label: 'App Store', href: 'https://apps.apple.com/ph/app/tellycom-host-book-get-paid/id6468353899' },
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.tellycom.app&hl=en' },
    ],
  },
  {
    icon: '💼',
    bg: '#fffbeb',
    name: 'Tellycom Plus',
    desc: 'The business-side web app for Tellycom — built for service providers to manage their offerings, availability, and clients on the platform.',
    highlight: 'Separate product, same platform',
    tag: 'React',
    links: [
      { label: 'tellycomplus.io', href: 'https://tellycomplus.io' },
    ],
  },
  {
    icon: '🦋',
    bg: '#faf5ff',
    name: 'Kima v2',
    desc: 'Had the vision, made every call. Built it from scratch, solo. Launching soon.',
    highlight: 'Solo build, launching July 2026',
    tag: 'Full-stack',
    links: [],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-16 border-t border-gray-100">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">Featured projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map(({ icon, bg, name, desc, highlight, tag, links }) => (
          <div key={name} className="flex flex-col border border-gray-200 rounded-xl p-5 bg-gray-50">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-3"
              style={{ background: bg }}
            >
              {icon}
            </div>
            <p className="text-sm font-medium mb-1">{name}</p>
            <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
            <p className="text-xs text-gray-400 mt-2">{highlight}</p>
            <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 w-fit">
              {tag}
            </span>
            {links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200">
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 border border-gray-200 rounded-lg text-gray-500 hover:text-gray-900 hover:border-gray-300 bg-white transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
