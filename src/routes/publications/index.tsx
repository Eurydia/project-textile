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
  Typography,
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

                  {to.abstract && (
                    <CardContent component={'div'}>
                      <Typography fontWeight={800}>Abstract</Typography>
                      <Typography variant="body2">{to.abstract}</Typography>
                    </CardContent>
                  )}

                  <CardActions>
                    <Link
                      to="/publications/$"
                      params={{ _splat: to.path.slice(1).join('/') }}
                    >
                      More &raquo;
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
