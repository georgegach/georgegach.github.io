import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Converter from '../components/converter/Converter'


const links = [
  {
    name: 'ანბანის გადამყვანი',
    url: '/converter',
    description: 'დააკონვერტირეთ მხედრული ტექსტები ასომთავრულში, ნუსხურში, მხედრულის მთავრულში და სხვა'
  },
  {
    name: 'ლორემ იპსუმ',
    url: '/lorem',
    description: 'დააგენერირეთ Lorem Ipsum მსგავსი შემთხვევითი ვითომქართული ტექსტები ხელოვნური ინტელექტის მეშვეობით.'
  },
  {
    name: 'აფორიზმები',
    url: '/quotes',
    description: 'უნიკალური აფორიზმების კრებული ქართული და უცხოური ლიტერატურიდან'
  },
  {
    name: 'ისწავლე',
    url: '/learn',
    description: 'ისწავლე ასომთავრული ანბანი'
  },
]

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Welcome to Anbani</title>
        </Head>
        <div
          className='container mx-auto flex flex-col mt-10 gap-5 items-center'
        >
          <p className='text-brand-600 font-bold text-xl'>გამარჯობა და კეთილი იყოს თქვენი მობრძანება</p>
          <h1 className='text-3xl max-w-2xl rounded-3xl  text-center text-secondary-100 bg-brand-600 p-4' >ᲥᲐᲠᲗᲣᲚᲘ ᲐᲜᲑᲐᲜᲘᲡ ᲘᲜᲢᲔᲠᲐᲥᲢᲘᲣᲚ ᲡᲐᲒᲐᲜᲛᲐᲜᲐᲗᲚᲔᲑᲚᲝ ᲞᲚᲐᲢᲤᲝᲠᲛᲐᲖᲔ
</h1>
          <p className='text-secondary-600 text-lg font-bold'>აირჩიე სასურველი პროექტი</p>
          <div className='flex flex-col gap-10 mt-20  '>
            {links.map(item => {
              return (
                <Link className='font-bold' href={item.url} key={item.url}>
                  <div className='cursor-pointer hover:scale-110 hover:bg-secondary-100 rounded-2xl p-4 transition'>
                    <h2 className='text-brand-600 font-bold text-3xl'>{item.name}</h2>
                    <span>{`anbani.ge${item.url}`}</span>
                    <p className='text-secondary-600'>{item.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}
