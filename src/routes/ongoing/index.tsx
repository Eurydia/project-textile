import { useInjectScripts } from '@/hooks/useInjectScripts'
import { Box, Card, CardContent, Divider, Grid, Stack } from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/ongoing/')({
  component: RouteComponent,
  loader: async ({ context: { getBodyContent, getHeadContent } }) => {
    const html = await fetch('/content/ongoing/index.html').then((r) =>
      r.text(),
    )
    return { body: getBodyContent(html), head: getHeadContent(html) }
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.head.title }],
  }),
})

function RouteComponent() {
  const { siteBlogs } = Route.useRouteContext()
  const { body, head } = Route.useLoaderData()
  useInjectScripts(head.scripts)

  return (
    <Stack spacing={2}>
      <Box component="div" dangerouslySetInnerHTML={{ __html: body }}></Box>
      <Divider flexItem />
      <Grid container spacing={2}>
        {siteBlogs
          .filter((p) => p.path.length > 0 && p.path[0] === 'ongoing')
          .map((to, i) => {
            return (
              <Grid size={{ md: 6, sm: 12 }} key={i}>
                <Card variant="outlined">
                  <CardContent>
                    <Link
                      to={'/ongoing/$'}
                      params={{ _splat: to.path.slice(1).join('/') }}
                    >
                      {to.title}
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
      </Grid>
    </Stack>
  )
}
