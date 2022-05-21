import Head from 'next/head'
import Link from 'next/link'
import Resume from '../components/projects/Resume'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'


export default function Index({ allPosts }) {
  return (
    <>
      <Layout>

        <Head>
          <title>Resume</title>
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
          <Resume />
        </motion.div>
      </Layout>
    </>
  )
}
