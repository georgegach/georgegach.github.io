import Head from 'next/head'
import Link from 'next/link'


export default function Index({ allPosts }) {
  return (
    <>
      <div className="container">

        <Head>
          <title>George Gach</title>
        </Head>
        <div
          className='container mx-auto flex flex-col mt-10 gap-5 items-center'
        >
          <h1 className='text-3xl max-w-2xl rounded-3xl  text-center text-secondary-100 bg-brand-600 p-4' >
            გამარჯობა
          </h1>
        </div>
      </div>
    </>
  )
}
