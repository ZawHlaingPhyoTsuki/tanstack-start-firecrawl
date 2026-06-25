import Navbar from '#/components/web/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />
    </div>
  )
}
