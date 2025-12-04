import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_blogs/ongoing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ongoing/"!</div>
}
