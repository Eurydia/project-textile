import { ArticleCard } from '@/components/article-card'
import { Box, ImageList, ImageListItem, Stack } from '@mui/material'
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
        {items.map((item, i) => {
          return (
            <ImageListItem key={i}>
              <ArticleCard article={item} />
            </ImageListItem>
          )
        })}
      </ImageList>
    </Stack>
  )
}
