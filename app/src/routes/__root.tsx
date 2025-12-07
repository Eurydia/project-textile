import { router } from '@/router'
import siteBlogsRaw from '@/site/sitemap.json'
import { MainTheme } from '@/theme'
import {
  AppBar,
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

const siteBlogs = siteBlogsRaw as {
  title: string
  path: string[]
  abstract?: string
}[]

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
    const figures: Record<string, { default: string }> = import.meta.glob(
      '@/site/content/figures/**/*',
      {
        query: '?url',
        eager: true,
      },
    )
    const url = new URL(e.src)
    const pathname = url.pathname
    e.src =
      figures[
        `/src/site/content/${pathname.split('/').slice(2).join('/')}`
      ].default
  })

  body.querySelectorAll('a').forEach((el) => {
    if (!el.href) {
      return
    }

    if (el.matches('a:has(> img)')) {
      const figures: Record<string, { default: string }> = import.meta.glob(
        '@/site/content/figures/**/*',
        {
          query: '?url',
          eager: true,
        },
      )
      const url = new URL(el.href)
      const pathname = url.pathname
      el.href =
        figures[
          `/src/site/content/${pathname.split('/').slice(2).join('/')}`
        ].default
    } else {
      const url = new URL(el.href)
      const loc = router.buildLocation({
        hash: `/${url.hash}`,
      })
      el.setAttribute('href', loc.url)
    }
  })

  return body.innerHTML
}

export const Route = createRootRoute({
  beforeLoad: async () => {
    const siteMap = Object.fromEntries(
      siteBlogs.map((v) => {
        return ['/' + v.path.join('/'), v]
      }),
    )
    return {
      siteMap,
      siteBlogs: siteBlogs,
      getBodyContent,
    }
  },
  component: () => (
    <>
      <HeadContent />
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        <AppBar
          position="relative"
          variant="outlined"
          color="default"
          sx={{ paddingY: 0 }}
        >
          <Toolbar disableGutters>
            <Stack
              direction={'row'}
              spacing={2}
              useFlexGap
              flexWrap={'nowrap'}
              divider={<Divider flexItem orientation="vertical" />}
            >
              <Link to="/">Home</Link>
              <Link to="/ongoing">Ongoing research</Link>
              <Link to="/publications">Publications</Link>
            </Stack>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ paddingTop: 8, paddingBottom: 4 }}>
          <Outlet />
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
  ),
})
