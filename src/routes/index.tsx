import { useTypesetOnLoad } from '@/hooks/useInjectScripts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  loader: async ({ context: { getBodyContent } }) => {
    const html = await fetch('/content/index.html').then((r) => r.text())
    return { body: getBodyContent(html) }
  },
  head: () => ({
    meta: [{ title: 'Home' }],
  }),
})

function App() {
  const { body } = Route.useLoaderData()
  useTypesetOnLoad()
  return <div dangerouslySetInnerHTML={{ __html: body }}></div>
}
