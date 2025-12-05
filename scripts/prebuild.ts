import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { posix } from 'node:path'
import { basename } from 'node:path/posix'
import { spawnSync } from 'node:child_process'
import { globbySync } from 'globby'
import { JSDOM } from 'jsdom'

const contentDir = posix.join(posix.dirname(process.cwd()), 'content')
const tempDir = posix.join(contentDir, 'temp')

try {
  if (!existsSync(tempDir)) {
    mkdirSync(tempDir)
  }
  for (const blog of globbySync(posix.join(contentDir, '**', '*.tex'), {
    ignore: [posix.join(contentDir, 'temp', '**')],
  })) {
    const sg = blog.split(posix.sep).slice(1)
    const bname = sg.at(-1)!
    const stem = basename(bname, '.tex')
    sg.pop()
    const workingDir = posix.join(tempDir, ...sg, stem)
    console.debug(sg, workingDir)
    mkdirSync(workingDir, { recursive: true })
    copyFileSync(blog, posix.join(workingDir, bname))

    spawnSync('pdflatex', [bname], { cwd: workingDir })
    spawnSync('lwarpmk', ['html'], { cwd: workingDir })
    spawnSync('lwarpmk', ['clean'], { cwd: workingDir })

    const publicDir = posix.join(
      posix.dirname(process.cwd()),
      'public',
      'content',
      ...sg,
    )
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir, { recursive: true })
    }
    copyFileSync(
      posix.join(workingDir, `${stem}.html`),
      posix.join(publicDir, `${stem}.html`),
    )
  }
} catch (e) {
  console.debug(e)
} finally {
  rmSync(posix.join(posix.dirname(process.cwd()), 'content', 'temp'), {
    recursive: true,
    force: true,
  })
}

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
  { flag: 'w+' },
)
