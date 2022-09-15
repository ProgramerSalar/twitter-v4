import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widget'



export default function Home(){
  return(
    <div className="">
      <Head>
        <title>Twitter-clone</title>
      </Head>

      <main className='flex min-h-screen max-w-7xl mx-auto bg-red-100 '>
        {/* sidebar  */}
        <Sidebar/>


        {/* feed  */}
        <Feed/>


        {/* Widgets  */}
        <Widgets/>



        {/* Modal */}

      </main>

     
    </div>
  )
}


