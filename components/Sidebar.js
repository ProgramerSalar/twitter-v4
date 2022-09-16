import Image from "next/image";
import SidebarMenuItem from  "./SidebarMenuItem"
import { useSession , signIn  , signOut  } from "next-auth/react";


import {HomeIcon , BookmarkIcon ,  HashtagIcon, BellIcon, InboxIcon, ClipboardIcon, UserIcon, EllipsisHorizontalIcon} from "@heroicons/react/24/solid"

export default function Sidebar(){
    const {data : session} = useSession();

    return (
        <div className="sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">

            {/* Twitter Logo  */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" width={30} height={30} />
            </div>

            {/* Menu  */}
            <div className="mt-4 mb-2.5 xl:items-start">
                {session && (
                    <>
                     <SidebarMenuItem text="Home" Icon={HomeIcon}/>
                    <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
                    <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
                    <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
                    <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
                    <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
                    <SidebarMenuItem text="Profile" Icon={UserIcon}/>
                    <SidebarMenuItem text="More" Icon={EllipsisHorizontalIcon}/>
                    
                    </>
                )}
               
            </div>

                {/* button  */}
                {session ?(
                    <>

                        <button className="text-black bg-blue-400 rounded-full w-56 h-[52px] text-lg font-bold shadow-sm hover:brightness-95">Tweet</button>

                        {/* miniprofile  */}

                        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                        <img
                        src={session.user.image}
                        alt="user-img"
                        className="h-6 w-6 rounded-full xl:mr-2"/>

                        <div className="leading-5 rounded-full xl:mr-2">
                            <h4 className="font-bold">{session.user.name}</h4>
                            <p className="text-gray-500">@{session.user.username}</p>
                        </div>
                        <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>

                        </div>
                    
                    </>
                ):(
                    <button onClick={signIn} className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">sign in</button>
                )}

            
        </div>
    )
};