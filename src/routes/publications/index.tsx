import { useTypesetOnLoad } from '@/hooks/useTypesetOnLoad'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
} from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/publications/')({
  component: RouteComponent,
  loader: async ({ context: { getBodyContent } }) => {
    const items: Record<string, { default: string }> = import.meta.glob(
      '@/site/content/publications/index.html',
      {
        eager: true,
        query: '?raw',
      },
    )
    return {
      body: getBodyContent(
        items['/src/site/content/publications/index.html'].default,
      ),
    }
  },
  head: () => ({
    meta: [{ title: `Publications | ${__APP_NAME__}` }],
  }),
})

function RouteComponent() {
  const { siteBlogs } = Route.useRouteContext()
  const { body } = Route.useLoaderData()
  useTypesetOnLoad()
  return (
    <Stack spacing={2} divider={<Divider flexItem />}>
      <Box component="div" dangerouslySetInnerHTML={{ __html: body }}></Box>
      <ImageList variant="masonry" cols={1}>
        {siteBlogs
          .filter(
            (p) =>
              p.path.length === 2 &&
              p.path[0] === 'publications' &&
              p.path.at(-1) !== 'index.html',
          )
          .map((to, i) => {
            return (
              <ImageListItem key={i}>
                <Card variant="outlined">
                  <CardHeader title={to.title} />
                  <CardContent
                    component={'div'}
                    title={to.abstract?.trim()}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',

                      lineHeight: 1.5,
                      maxHeight: 'calc(1.5em * 5)',

                      '&::after': (theme) => ({
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,

                        height: 'calc(1.5em * 2)',

                        pointerEvents: 'none',
                        background: `linear-gradient(
        to bottom,
        transparent 0%,
        ${theme.palette.background.default} 60%,
        ${theme.palette.background.default} 100%
      )`,
                      }),
                    }}
                  >
                    {to.abstract ?? ''}
                  </CardContent>
                  <CardActions>
                    <Link
                      to="/publications/$"
                      params={{ _splat: to.path.slice(1).join('/') }}
                    >
                      More
                    </Link>
                  </CardActions>
                </Card>
              </ImageListItem>
            )
          })}
      </ImageList>
    </Stack>
  )
}
