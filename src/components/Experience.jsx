const jobs = [
  {
    company: 'Kima',
    role: 'Full-stack developer',
    date: 'Feb 2026 – present',
    desc: 'Rebuilding a social media app end-to-end — design, development, and deployment — solo. Every decision from concept to scope was mine. ~80% complete, targeting launch July 2026.',
  },
  {
    company: 'Tellycom LLC',
    role: 'Frontend developer (Flutter + React)',
    date: 'Jan 2024 – present',
    desc: 'Built the Flutter mobile app for a services marketplace — handling bookings, payments, and conference calls. Also built Tellycom Plus, the business-side web app in React for managing service providers on the platform.',
  },
  {
    company: 'Department of Agriculture',
    role: 'Software developer (contract)',
    date: 'Jul 2022 – present',
    desc: 'Built and maintain PIPS, a Laravel/React investment tracking system used by 200–300 users across DA bureaus and agencies. Leading migration to Flutter for cross-platform access.',
  },
  {
    company: 'Zipher Solutions (Upwork)',
    role: 'Freelance full-stack developer',
    date: 'Nov–Dec 2023',
    desc: 'AWS backend infrastructure, web and mobile apps in Flutter.',
  },
  {
    company: 'Department of Agriculture',
    role: 'Software developer',
    date: 'Dec 2018 – Nov 2021',
    desc: "Built IPMS (Laravel GraphQL + Quasar), the agency's first web-based investment programming system and predecessor to PIPS.",
  },
]

export default function Experience() {
  return (
    <section id="work" className="px-8 py-16 border-t border-gray-100">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">Experience</p>
      <div className="divide-y divide-gray-100">
        {jobs.map(({ company, role, date, desc }) => (
          <div key={company + date} className="py-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1">
            <div>
              <p className="text-sm font-medium">{company}</p>
              <p className="text-sm text-gray-400 mt-0.5">{role}</p>
            </div>
            <p className="text-sm text-gray-400 sm:text-right whitespace-nowrap">{date}</p>
            <p className="text-sm text-gray-500 leading-relaxed mt-2 sm:col-span-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
