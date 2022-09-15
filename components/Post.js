import { ChartBarIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/solid";


export default function Post({post}){
    return(
        <div className="flex p-3 cursor-pointer border-b  ">
             {/* user image  */}
             <img src={post.userImg} className="h-11 w-11 rounded-full mr-4 "/>


             {/* right side  */}
            <div className="">
                {/* Header  */}

                <div className="flex items-center justify-between ">
                    {/* post user information  */}
                    <div className="flex space-x-1 whitespace-nowrap">
                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                        <span className="text-sm sm:text-[15px] ">@{post.username} - </span>
                        <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>


                    </div>

                    {/* dot icon  */}
                    <EllipsisHorizontalIcon className="h-10  w-10 hoverEffect "/>



                </div>
                {/* post text  */}
                <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2 ">{post.text}</p>


                {/* post image  */}
                <img  className="rounded-2xl mr-2 "src={post.img}/>


                {/* icons  */}
                <div className="flex justify-between text-gray-400 ">
                    <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                    <TrashIcon className="h-9  w-9 hoverEffect p-2 hover:text-red-400 hover:bg-sky-100"/>
                    <HeartIcon className="h-9  w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                    <ShareIcon className="h-9  w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                    <ChartBarIcon className="h-9  w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>


                </div>





             </div>
            
            
        </div>
    )
}