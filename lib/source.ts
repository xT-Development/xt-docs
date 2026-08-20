import { loader } from 'fumadocs-core/source'
import { defineDocs } from 'fumadocs-mdx/macro'

// `dir` must stay a static string literal - the macro API resolves it at build time.
const docs = defineDocs({ dir: 'content' })

// baseUrl '/' keeps every pre-existing URL (/free-resources/prison, ...) intact,
// which is why the routes live in the `(docs)` route group rather than under /docs.
export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource()
})
