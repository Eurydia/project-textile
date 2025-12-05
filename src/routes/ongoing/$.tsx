import { useTypesetOnLoad } from '@/hooks/useInjectScripts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ongoing/$')({
  component: RouteComponent,
  loader: async ({
    context: { getBodyContent, siteMap },
    params: { _splat },
  }) => {
    const html = await fetch(`/content/ongoing/${_splat}`).then((r) => r.text())

    return { body: getBodyContent(html), title: siteMap[`/ongoing/${_splat}`] }
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.title.title }],
  }),
})

function RouteComponent() {
  const { body } = Route.useLoaderData()
  useTypesetOnLoad()

  return <div dangerouslySetInnerHTML={{ __html: body }}></div>
}
