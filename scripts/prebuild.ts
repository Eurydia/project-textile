import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  rmdir,
  rmdirSync,
  writeFileSync,
} from 'node:fs'
import { posix, relative } from 'node:path'
import { basename } from 'node:path/posix'
import { spawn, spawnSync } from 'node:child_process'
import { globbySync } from 'globby'
import { JSDOM } from 'jsdom'

const contentDir = posix.join(process.cwd(), 'content')
const tempDir = posix.join(contentDir, 'temp')

if (existsSync(tempDir)) {
  rmSync(tempDir, { force: true, recursive: true })
}
mkdirSync(tempDir)
for (const blog of globbySync(posix.join(contentDir, '**', '*.tex'), {
  ignore: [posix.join(contentDir, 'temp', '**')],
})) {
  const sg = relative(process.cwd(), blog).split(posix.sep).slice(1)
  const bname = sg.at(-1)!
  const stem = basename(bname, '.tex')
  sg.pop()
  const workingDir = posix.join(tempDir, ...sg, stem)
  console.debug('!!!!')
  console.debug(workingDir)
  console.debug(blog)
  console.debug(posix.join(workingDir, bname))

  mkdirSync(workingDir, { recursive: true })
  copyFileSync(blog, posix.join(workingDir, bname))
  spawnSync('ls', ['-lha'], { cwd: workingDir, stdio: 'inherit' })
  spawnSync('pdflatex', [bname], { cwd: workingDir, stdio: 'inherit' })
  // runSync('lwarpmk', ['html'], { cwd: workingDir })
  // runSync('lwarpmk', ['clean'], { cwd: workingDir })
  // runSync('ls', ['-la'], { cwd: workingDir })

  const publicDir = posix.join(process.cwd(), 'public', 'content', ...sg)
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true })
  }
  copyFileSync(
    posix.join(workingDir, `${stem}.html`),
    posix.join(publicDir, `${stem}.html`),
  )
}

const sitemap: Record<
  string,
  Array<{ title: string; path: Array<string> }>
> = {}

for (const dir of ['publications', 'ongoing']) {
  sitemap[dir] = []

  for (const blog of globbySync(
    posix.join(process.cwd(), 'public', 'content', dir),
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
  posix.join(process.cwd(), 'public', 'sitemap.json'),
  JSON.stringify(sitemap, null, 2),
  { flag: 'w+' },
)
