import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widget'



export default function Home({ newsResults }){
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
        <Widgets newsResults={newsResults.articles}/>



        {/* Modal */}

      </main>

     
    </div>
  )
}


export async function getServerSideProps(){
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
  ).then((res)=>res.json());
  return{
    props:{
      newsResults,
    },
  };
}


