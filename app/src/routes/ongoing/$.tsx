import { useTypesetOnLoad } from '@/hooks/useTypesetOnLoad'
import { Box } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ongoing/$')({
  component: RouteComponent,
  loader: async ({
    context: { getBodyContent, siteMap },
    params: { _splat },
  }) => {
    const items: Record<string, { default: string } | undefined> =
      import.meta.glob(`@/site/content/ongoing/*.html`, {
        eager: true,
        query: '?raw',
      })
    return {
      body: getBodyContent(
        items[`/src/site/content/ongoing/${_splat}`]?.default,
      ),
      title: siteMap[`/ongoing/${_splat}`],
    }
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.title.title} | Ongoing Research | ${__APP_NAME__}`,
      },
    ],
  }),
})

function RouteComponent() {
  const { body } = Route.useLoaderData()
  useTypesetOnLoad()

  return <Box component="div" dangerouslySetInnerHTML={{ __html: body }}></Box>
}
