import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widget'



export default function Home({ newsResults  , randomusersResults}){
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
        <Widgets newsResults={newsResults.articles} randomusersResults={randomusersResults.results}/>



        {/* Modal */}

      </main>

     
    </div>
  )
}


export async function getServerSideProps(){
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
  ).then((res)=>res.json());

  // who to follow section 
  const randomusersResults = await fetch("https://randomuser.me/api/?results=30&inc=name,login,picture").then((res)=>res.json());
  return{
    props:{
      newsResults,
      randomusersResults
    },
  };
}


