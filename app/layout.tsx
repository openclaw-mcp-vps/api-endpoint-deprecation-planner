import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Deprecation Planner — Plan & Communicate API Deprecations',
  description: 'Track API endpoint usage, plan deprecation timelines, and automate customer communication. Built for API product managers and engineering teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0b7aca4d-4990-4ab0-af51-b9857c8b7ffb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
