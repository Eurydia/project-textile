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

const getHeadContent = (html: string) => {
  const parser = new DOMParser()
  const dom = parser.parseFromString(html, 'text/html')

  const title = dom.querySelector('title')?.innerText ?? ''
  const scripts = [...dom.querySelectorAll('script')].map(
    ({ src, innerText }) => ({
      src: src || undefined,
      children: innerText || undefined,
    }),
  )
  console.debug(scripts)

  return { title, scripts }
}

const getBodyContent = (html: string) => {
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
    e.src = `/content/${url.pathname}`
  })

  body.querySelectorAll('a').forEach((el) => {
    if (!el.href) {
      return
    }

    if (el.matches('a:has(> img)')) {
      const url = new URL(el.href)
      el.href = `/content${url.pathname}`
    } else {
      const url = new URL(el.href)
      el.href = url.hash
    }
  })

  return body.innerHTML
}

export const Route = createRootRoute({
  beforeLoad: async () => {
    const siteBlogs: Array<{ path: string[]; title: string }> = await fetch(
      '/sitemap.json',
    ).then((r) => r.json())

    return {
      siteBlogs,
      getBodyContent,
      getHeadContent,
    }
  },
  component: () => (
    <>
      <HeadContent />
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        <AppBar position="relative" variant="outlined" color="default">
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
