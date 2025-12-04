import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import path, { posix } from 'node:path'
import { globby, globbyStream, globbySync } from 'globby'
import { JSDOM } from 'jsdom'

const sitemap: Record<
  string,
  Array<{ title: string; path: Array<string> }>
> = {}

for (const dir of ['publications', 'ongoing']) {
  sitemap[dir] = []

  for (const blog of globbySync(
    posix.join(posix.dirname(process.cwd()), 'public', 'content', dir),
  )) {
    const rawHtml = readFileSync(blog, 'utf-8')
    const dom = new JSDOM(rawHtml)
    const doc = dom.window.document
    const title = doc.querySelector('title')?.textContent || 'No Title'
    const blogPath = blog.split(posix.sep)
    sitemap[dir].push({
      title,
      path: blogPath.slice(2),
    })
  }
}

writeFileSync(
  posix.join(posix.dirname(process.cwd()), 'public', 'sitemap.json'),
  JSON.stringify(sitemap, null, 2),
)
