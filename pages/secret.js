import Head from 'next/head'
import Link from 'next/link'
import Art from '../components/projects/Art'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'


export default function Index({ allPosts }) {
  return (
    <>
      <Layout>

        <Head>
          <title>George Gach</title>
        </Head>

        <motion.div
          className='relative flex-grow isolate'
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Art />
        </motion.div>
      </Layout>
    </>
  )
}
