import { typesetMath } from '@/mathjax'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

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
  useEffect(() => {
    ;(async () => {
      await typesetMath()
    })()
  }, [])
  return <div dangerouslySetInnerHTML={{ __html: body }}></div>
}
