import { useTypesetOnLoad } from '@/hooks/useTypesetOnLoad'
import { Box } from '@mui/material'
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
    meta: [{ title: `Home | ${__APP_NAME__}` }],
  }),
})

function App() {
  const { body } = Route.useLoaderData()
  useTypesetOnLoad()
  return (
    <Box component={'div'} dangerouslySetInnerHTML={{ __html: body }}></Box>
  )
}
