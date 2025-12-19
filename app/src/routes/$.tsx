import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo } from 'react'

export const Route = createFileRoute('/$')({
  component: RouteComponent,
  loader: async ({
    context: { getBodyContent, siteMap },
    params: { _splat },
  }) => {
    const url = `${import.meta.env.BASE_URL}content/${_splat}`
    const doc = await fetch(url).then((resp) => resp.text())
    return {
      body: getBodyContent(doc),
      title: siteMap[`/${_splat}`],
    }
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.title.title} | ${__APP_NAME__}`,
      },
    ],
  }),
})

function RouteComponent() {
  const { body } = Route.useLoaderData()
  const { siteBlogs } = Route.useRouteContext()
  const { _splat } = Route.useParams()
  const nav = Route.useNavigate()
  useEffect(() => {
    ;(async () => {
      await window.MathJax.typesetPromise().catch(() => {})
    })()
  }, [body])

  const items = useMemo(() => {
    const base = (_splat ?? '')
      .replace(/.html$/, '')
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const re = new RegExp(`^${base}/[^/]+\\.html$`)

    return siteBlogs.filter(({ path }) => re.test(path.join('/')))
  }, [_splat, siteBlogs])

  return (
    <Stack spacing={2}>
      {!!body && (
        <Box component="div" dangerouslySetInnerHTML={{ __html: body }}></Box>
      )}
      <ImageList variant="masonry">
        {items.map((to, i) => {
          return (
            <ImageListItem key={i}>
              <Card variant="outlined">
                <CardActionArea
                  disableRipple
                  onClick={() =>
                    nav({
                      to: '/$',
                      params: { _splat: to.path.join('/') },
                    })
                  }
                >
                  <CardHeader title={to.title} />
                  {to.abstract && (
                    <CardContent component={'div'}>
                      <Typography fontWeight={800}>Abstract</Typography>
                      <Typography
                        variant="body2"
                        sx={(t) => ({
                          maxHeight: 250,
                          overflow: 'hidden',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: 'auto 0 0',
                            height: 32,
                            pointerEvents: 'none',
                            background: `linear-gradient(to bottom, transparent, ${t.palette.background.default})`,
                          },
                        })}
                      >
                        {to.abstract}
                      </Typography>
                    </CardContent>
                  )}

                  <CardActions>More &raquo;</CardActions>
                </CardActionArea>
              </Card>
            </ImageListItem>
          )
        })}
      </ImageList>
    </Stack>
  )
}
