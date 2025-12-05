import { useTypesetOnLoad } from '@/hooks/useInjectScripts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/publications/$')({
  component: RouteComponent,
  loader: async ({
    context: { getBodyContent, siteMap },
    params: { _splat },
  }) => {
    console.debug(_splat)
    const html = await fetch(`/content/publications/${_splat}`).then((r) =>
      r.text(),
    )

    return {
      body: getBodyContent(html),
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
