import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100">
        팀 콰또즈 멤버들
      </h1>
      {allAuthors.map((author) => (
        <>
          {author.name !== '커피밋' && (
            <AuthorLayout content={coreContent(author)}>
              <MDXLayoutRenderer code={author.body.code} />
            </AuthorLayout>
          )}
        </>
      ))}
    </>
  )
}
