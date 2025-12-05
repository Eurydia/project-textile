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
const assetDir = join(process.cwd(), 'src', 'site')

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
  mkdirSync(join(assetDir, 'content', ...segments), { recursive: true })
  cpSync(htmlPath, join(assetDir, 'content', ...segments, `${stem}.html`))
  spawnSync('lwarpmk', ['cleanall'], { cwd: workingDir })
}

cpSync(join(contentDir, 'figures'), join(assetDir, 'content', 'figures'), {
  recursive: true,
})

writeFileSync(
  join(assetDir, 'sitemap.json'),
  JSON.stringify(
    globbySync('./src/site/content/**/*.html').map((p) => {
      const dom = new JSDOM(readFileSync(p))
      const abstract = dom.window.document.body.querySelector('.abstract > p')
      return {
        path: relative(join(assetDir, 'content'), p).split(path.sep),
        title: dom.window.document.title,
        abstract: abstract === null ? undefined : abstract.textContent,
      }
    }),
  ),
  { flag: 'w+' },
)
