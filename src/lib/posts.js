import { marked } from 'marked'

const modules = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/)
  if (!match) return { data: {}, content: raw }
  const data = Object.fromEntries(
    match[1].split('\n').filter(Boolean).map(line => {
      const colon = line.indexOf(':')
      return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()]
    })
  )
  return { data, content: match[2] }
}

function slugify(path) {
  return path.replace(/^.*\//, '').replace(/\.md$/, '')
}

export function getPosts() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { data } = parseFrontmatter(raw)
      return {
        slug: slugify(path),
        title: data.title ?? 'Untitled',
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug) {
  const entry = Object.entries(modules).find(([path]) => slugify(path) === slug)
  if (!entry) return null
  const { data, content } = parseFrontmatter(entry[1])
  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    html: marked(content),
  }
}
