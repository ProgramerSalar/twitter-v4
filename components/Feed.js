import { SparklesIcon } from "@heroicons/react/24/solid";
import Input from "./input";
import Post from "./Post";


export default function Feed(){
    const posts =[
        {
            id:"1",
            name:"manish kumar",
            username:"codewithmanish",
            userImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png",
            img:"https://images.unsplash.com/photo-1657214059212-104dac959c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            text:"nice view",
            timestamp:"2 hour ag0"
            
        },
        {
            id:"2",
            name:"manish kumar",
            username:"codewithmanish",
            userImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png",
            img:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            text:"nice photo for nature",
            timestamp:"2 hour ago"
            
        }
        
    ]
    return(
        <div className="xl:ml-[370px] border-1 border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl ">
            <div className="flex py-2 px-12 sticky top-0 z-50 bg-white border-b  border-gray-200 ">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 ">
                    <SparklesIcon className="h-5 "/>
                </div>
            </div>
            <Input/>
            {posts.map((post)=>(
                <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}