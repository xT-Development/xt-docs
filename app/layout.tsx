import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './global.css'

export const metadata: Metadata = {
  title: {
    default: 'xT Docs',
    template: '%s – xT Docs'
  },
  description:
    'Documentation for xT Development resources. Everything you need for the free and paid FiveM resources, plus a collection of RedM development links.',
  applicationName: 'xT Docs'
}

// favicon comes from app/icon.png
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
