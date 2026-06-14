import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/items/$itemId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { itemId } = Route.useParams()
  return <div>Hello "/dashboard/items/$itemId"! - ItemId : {itemId}</div>
}
