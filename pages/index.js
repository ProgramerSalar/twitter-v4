import Head from 'next/head'
import Sidebar from '../components/Sidebar'



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


        {/* Widgets  */}



        {/* Modal */}

      </main>

     
    </div>
  )
}


