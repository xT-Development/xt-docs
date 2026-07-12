import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import logo from '../public/logo.png'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'xT Docs',
    template: '%s – xT Docs'
  },
  description:
    'Documentation for xT Development resources. Everything you need for the free and paid FiveM resources, plus a collection of RedM development links.',
  applicationName: 'xT Docs'
}

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Image src={logo} alt="" height={28} priority />
        <b>xT Development</b>
      </span>
    }
    projectLink="https://github.com/xT-Development"
    chatLink="https://discord.xthrasherrr.dev"
  />
)

const footer = (
  <Footer>
    <div>
      <a href="https://store.xthrasherrr.dev" target="_blank" rel="noreferrer">
        Store
      </a>
      {' · '}
      <a href="https://github.com/xT-Development" target="_blank" rel="noreferrer">
        GitHub
      </a>
      {' · '}
      <a href="https://discord.xthrasherrr.dev" target="_blank" rel="noreferrer">
        Discord
      </a>
      {' · '}
      <a href="https://xthrasherrr.dev" target="_blank" rel="noreferrer">
        Website
      </a>
      <p style={{ marginTop: '0.5rem' }}>
        MIT {new Date().getFullYear()} © xT Development.
      </p>
    </div>
  </Footer>
)

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      {/* Brand accent #00ffcc. Dark mode uses it as-is; light mode drops the
          lightness so link text and active sidebar items stay legible on white. */}
      {/* favicon comes from app/icon.png */}
      <Head
        color={{
          hue: 168,
          saturation: 100,
          lightness: { dark: 50, light: 30 }
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/xThrasherrr/xt-docs/tree/main"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
