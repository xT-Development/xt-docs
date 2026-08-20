import { createRelativeLink } from 'fumadocs-ui/mdx'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  EditOnGitHub
} from 'fumadocs-ui/layouts/notebook/page'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMDXComponents } from '../../../components/mdx'
import { SiteFooter } from '../../../components/site-footer'
import { source } from '../../../lib/source'

const REPO_BASE = 'https://github.com/xThrasherrr/xt-docs/blob/main/content'

type Props = { params: Promise<{ slug?: string[] }> }

export default async function Page(props: Props) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents({ a: createRelativeLink(source, page) })} />
      </DocsBody>
      {/* Fumadocs has no layout-level footer slot the notebook layout renders on
          desktop, so the site footer lives at the end of the page content. */}
      <div className="mt-4 flex flex-col gap-4 border-t pt-6">
        <EditOnGitHub href={`${REPO_BASE}/${page.path}`} className="w-fit">
          Edit this page on GitHub
        </EditOnGitHub>
        <SiteFooter />
      </div>
    </DocsPage>
  )
}

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description
  }
}
