import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'
import { DiscordIcon } from '../components/icons'
import logo from '../public/logo.png'

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/xT-Development',
    nav: {
      url: '/',
      title: (
        <>
          <Image src={logo} alt="" height={28} priority />
          <b>xT Development</b>
        </>
      )
    },
    links: [
      { text: 'Welcome', url: '/', active: 'url' },
      {
        type: 'icon',
        label: 'Discord',
        text: 'Discord',
        url: 'https://discord.xthrasherrr.dev',
        external: true,
        icon: <DiscordIcon />
      }
    ]
  }
}
