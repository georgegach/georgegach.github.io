import Head from 'next/head'
import Link from 'next/link'
import Landing from '../components/landing/Landing'
import Layout from '../components/Layout'


export default function Index({ allPosts }) {
  return (
    <>
      <Layout>

        <Head>
          <title>George Gach</title>
        </Head>

        <Landing />
      </Layout>
    </>
  )
}
