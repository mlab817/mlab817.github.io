const groups = [
  {
    label: 'Mobile & frontend',
    chips: [
      { name: 'Flutter / Dart', color: '#54C5F8' },
      { name: 'React / React Native', color: '#61DAFB' },
      { name: 'Node.js', color: '#68A063' },
    ],
  },
  {
    label: 'Backend',
    chips: [
      { name: 'Laravel', color: '#FF2D20' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'AWS', color: '#FF9900' },
    ],
  },
  {
    label: 'Databases',
    chips: [
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'MySQL', color: '#4479A1' },
    ],
  },
  {
    label: 'Tooling',
    chips: [
      { name: 'AI-assisted development', color: '#8B5CF6' },
      { name: 'Linux / CentOS', color: '#6b7280' },
      { name: 'Git', color: '#6b7280' },
    ],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="px-8 py-16 border-t border-gray-100">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">Tech stack</p>
      <div className="space-y-6">
        {groups.map(({ label, chips }) => (
          <div key={label}>
            <p className="text-xs text-gray-400 mb-2">{label}</p>
            <div className="flex flex-wrap gap-2">
              {chips.map(({ name, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 bg-gray-50"
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
