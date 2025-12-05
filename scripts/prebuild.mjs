import { globbySync } from 'globby'
import { JSDOM } from 'jsdom'
import { spawnSync } from 'node:child_process'
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import path, { basename, join, relative } from 'node:path'

const contentDir = join(process.cwd(), 'content')
const tempDir = join(contentDir, 'temp')
const pubDir = join(process.cwd(), 'public')

if (existsSync(tempDir)) {
  rmSync(tempDir, { force: true, recursive: true })
}
mkdirSync(tempDir)
cpSync(join(contentDir, 'figures'), join(tempDir, 'figures'), {
  recursive: true,
})

for (const blog of globbySync('./content/**/*.tex', {
  ignore: ['content/temp/**'],
})) {
  const segments = relative(process.cwd(), blog).split(path.sep).slice(1, -1)
  const name = basename(blog)
  console.log(segments, name)

  const workingDir = join(tempDir, ...segments)

  cpSync(blog, join(workingDir, name), { recursive: true })
  spawnSync('pdflatex', [name, '-interaction=nonstopmode', '-halt-on-error'], {
    cwd: workingDir,
  })
  spawnSync('lwarpmk', ['html'], { cwd: workingDir })

  const stem = basename(name, '.tex')
  const htmlPath = join(workingDir, `${stem}.html`)
  if (!existsSync(htmlPath)) {
    console.debug('!!!!!!!!!!!!!!! No html generated')
    continue
  }
  mkdirSync(join(pubDir, 'content', ...segments), { recursive: true })
  cpSync(htmlPath, join(pubDir, 'content', ...segments, `${stem}.html`))
  spawnSync('lwarpmk', ['cleanall'], { cwd: workingDir })
}

cpSync(join(contentDir, 'figures'), join(pubDir, 'content', 'figures'), {
  recursive: true,
})

writeFileSync(
  join(pubDir, 'sitemap.json'),
  JSON.stringify(
    globbySync('./public/content/**/*.html').map((p) => {
      const dom = new JSDOM(readFileSync(p))
      return {
        path: relative(join(pubDir, 'content'), p).split(path.sep),
        title: dom.window.document.title,
      }
    }),
  ),
  { flag: 'w+' },
)
