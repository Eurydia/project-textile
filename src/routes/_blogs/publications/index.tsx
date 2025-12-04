import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_blogs/publications/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_blogs/publications/"!</div>
}
