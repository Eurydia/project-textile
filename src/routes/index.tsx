import { useTypesetOnLoad } from '@/hooks/useTypesetOnLoad'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  loader: async ({ context: { getBodyContent } }) => {
    const items: Record<string, { default: string }> = import.meta.glob(
      '@/site/content/index.html',
      {
        eager: true,
        query: '?raw',
      },
    )
    return { body: getBodyContent(Object.values(items)[0].default) }
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
