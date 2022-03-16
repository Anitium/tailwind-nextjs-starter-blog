import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const karel = await getFileBySlug('authors', [`default`], otherLocale)
  const juan = await getFileBySlug('authors', [`juancolamendy`], otherLocale)
  return { props: { karel, juan, availableLocales: locales } }
}

export default function About({ karel, juan, availableLocales }) {
  return (
    <>
      <MDXLayoutRenderer
        layout={karel.frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={karel.mdxSource}
        frontMatter={karel.frontMatter}
        availableLocales={availableLocales}
      />
      <MDXLayoutRenderer
        layout={juan.frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={juan.mdxSource}
        frontMatter={juan.frontMatter}
        availableLocales={availableLocales}
      />
    </>
  )
}
