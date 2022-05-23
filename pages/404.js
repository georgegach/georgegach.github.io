import Head from 'next/head'
import Link from 'next/link'


export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>404: Not Found</title>
      </Head>
      <section className="flex items-center h-full p-16 bg-coolGray-900 text-coolGray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 text-9xl text-gray-200 ">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl text-gray-400 md:text-3xl">ᲐᲡᲔ ᲕᲔᲠ ᲒᲐᲕᲤᲠᲘᲜᲓᲔᲑᲘᲗ</p>
            <p className="mt-4 mb-8 text-gray-400">გვერდი რომლის მონახულებასაც ცდილობთ აღარ არსებობს ან სულ არც არსებობდა.</p>
            <Link href="/">
              <a href="#" className="px-8 py-3 rounded rounded-full bg-indigo-400 text-white hover:bg-indigo-500 hover:shadow-md whitespace-nowrap">დაბრუნდით მთავარ გვერდზე</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}



