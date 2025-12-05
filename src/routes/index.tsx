import { createFileRoute } from '@tanstack/react-router'

const q: Record<
  string,
  Array<{ label: string; path: Array<string> }>
> = await fetch('/sitemap.json').then((r) => r.json())
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <></>
}
