import { useInjectScripts } from '@/hooks/useInjectScripts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ongoing/$')({
  component: RouteComponent,
  loader: async ({ context: { getBodyContent, getHeadContent } }) => {
    const html = await fetch('/content/index.html').then((r) => r.text())
    return { body: getBodyContent(html), head: getHeadContent(html) }
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.head.title }],
  }),
})

function RouteComponent() {
  const { body, head } = Route.useLoaderData()
  useInjectScripts(head.scripts)

  return <div dangerouslySetInnerHTML={{ __html: body }}></div>
}
