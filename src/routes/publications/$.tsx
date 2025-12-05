import { useTypesetOnLoad } from '@/hooks/useInjectScripts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/publications/$')({
  component: RouteComponent,
  loader: async ({ context: { getBodyContent }, params: { _splat } }) => {
    console.debug(_splat)
    // const html = await fetch('/content/${}').then((r) => r.text())
    return { body: '' }
  },
  head: ({ loaderData }) => ({
    // meta: [{ title: loaderData?.head.title }],
  }),
})

function RouteComponent() {
  const { body } = Route.useLoaderData()
  useTypesetOnLoad()

  return <div dangerouslySetInnerHTML={{ __html: body }}></div>
}
