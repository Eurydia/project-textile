import { useTypesetOnLoad } from '@/hooks/useInjectScripts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/publications/$')({
  component: RouteComponent,
  loader: async ({
    context: { getBodyContent, siteMap },
    params: { _splat },
  }) => {
    const items: Record<string, { default: string }> = import.meta.glob(
      `@/site/content/publications/*.html`,
      {
        eager: true,
        query: '?raw',
      },
    )
    return {
      body: getBodyContent(
        items[`/src/site/content/publications/${_splat}`].default,
      ),
      title: siteMap[`/publications/${_splat}`].title,
    }
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.title }],
  }),
})

function RouteComponent() {
  const { body } = Route.useLoaderData()
  useTypesetOnLoad()

  return <div dangerouslySetInnerHTML={{ __html: body }}></div>
}
