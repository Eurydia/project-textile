import _ from 'lodash'
import { router } from '@/router'
import { MainTheme } from '@/theme'
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Stack,
  ThemeProvider,
  Toolbar,
} from '@mui/material'
import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Link,
  Outlet,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import type { TexArticle } from '@/types/types'

const getBodyContent = (html?: string) => {
  if (!html) {
    return ''
  }
  const parser = new DOMParser()
  const dom = parser.parseFromString(html, 'text/html')

  const body = dom.querySelector('body')
  if (!body) {
    return ''
  }
  body.querySelectorAll('a > img').forEach((el) => {
    const e = el as HTMLImageElement
    if (!e.src) {
      return
    }
    const url = new URL(e.src)
    const src = url.pathname.split('/').slice(2).join('/')
    e.src = `${import.meta.env.BASE_URL}content/${src}`
  })

  body.querySelectorAll('a').forEach((el) => {
    if (!el.href) {
      return
    }

    if (el.matches('a:has(> img)')) {
      const url = new URL(el.href)
      const href = url.pathname.split('/').slice(2).join('/')
      el.href = `${import.meta.env.BASE_URL}content/${href}`
    } else {
      const url = new URL(el.href)
      const loc = router.buildLocation({
        hash: `/${url.hash}`,
      })
      el.href = `${import.meta.env.BASE_URL}#${loc.pathname.length === 1 ? loc.pathname.slice(1) : loc.pathname}${loc.hash}`
    }
  })
  return body.innerHTML
}

export const Route = createRootRoute({
  beforeLoad: async () => {
    const siteBlogs: TexArticle[] = await fetch(
      `${import.meta.env.BASE_URL}sitemap.json`,
    )
      .then((resp) => resp.json())
      .catch(() => [])

    const siteMap = Object.fromEntries(
      siteBlogs.map((v) => {
        return ['/' + v.path.join('/'), v]
      }),
    )
    return {
      siteMap,
      siteBlogs,
      getBodyContent,
    }
  },
  component: Root,
})

function Root() {
  const { siteBlogs } = Route.useRouteContext()
  return (
    <>
      <HeadContent />
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Stack spacing={2} paddingY={2}>
            <Toolbar disableGutters variant="dense">
              <Stack
                direction={'row'}
                spacing={2}
                useFlexGap
                flexWrap={'nowrap'}
                divider={<Divider flexItem orientation="vertical" />}
              >
                <Link to="/">Home</Link>
                {_.uniq(
                  siteBlogs
                    .filter(
                      ({ path }) =>
                        path.length === 1 && path.at(0) !== 'index.html',
                    )
                    .map(({ path }) => path.at(0)!),
                ).map((p, i) => (
                  <Link
                    to="/$"
                    params={{ _splat: p }}
                    style={{ textTransform: 'capitalize' }}
                    key={i}
                  >
                    {p.replace(/.html$/, '')}
                  </Link>
                ))}
              </Stack>
            </Toolbar>
            <Outlet />
          </Stack>
        </Container>
      </ThemeProvider>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
