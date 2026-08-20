import defaultMdxComponents from 'fumadocs-ui/mdx'
import * as FilesComponents from 'fumadocs-ui/components/files'
import * as TabsComponents from 'fumadocs-ui/components/tabs'
import type { MDXComponents } from 'mdx/types'
import { Badge, Frameworks } from './badge'
import { Steps } from './steps'
import { YouTube } from './youtube'

/**
 * Every component used in content/ is registered here, so the MDX files carry no
 * import statements of their own.
 *
 * defaultMdxComponents already supplies Card, Cards, Callout, headings, tables,
 * links, images and the Shiki code block.
 */
export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...FilesComponents,
    ...TabsComponents,
    Steps,
    Badge,
    Frameworks,
    YouTube,
    ...components
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents
