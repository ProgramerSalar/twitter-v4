
import {getProviders, signIn} from "next-auth/react"

export default function signIn({providers}){fffffffffffffffff
    return(
        <div className="flex justify-center mt-20 space-x-4">
            <img src="https://simplify360.com/wp-content/uploads/2021/05/Banner-change-with-Twitter-Publishing-Twitter-Chat-bot-screen.png"
            className="h-[500px] hidden object-cover  rotate-6 md:inline-flex" alt="twitter-image"/>
            <div className="">
                {Object.values(providers).map((provider) => (
                    <div className="flex flex-col items-center">
                        <img className="w-36 object-cover" src="https://logos-world.net/wp-content/uploads/2020/05/Twitter-Logo-2010.png"/>
                        <p className="text-center text-sm italic my-10">This website is  created by manish kumar</p>
                        <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500" onClick={()=> signIn(provider.id , {callbackUrl:"/"})}>Sign in with {provider.name}</button>
                    </div>
                ))}
                
            </div>
        </div>
    )
}


export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props:{
            providers,
        },
    }
}







