

import Image from "next/image";
import SidebarMenuItem from  "./SidebarMenuItem"


import {HomeIcon , BookmarkIcon ,  HashtagIcon, BellIcon, InboxIcon, ClipboardIcon, UserIcon, EllipsisHorizontalIcon} from "@heroicons/react/24/solid"

export default function Sidebar(){
    return (
        <div className="sm:flex flex-col p-2 xl:items-start fixed h-full">

            {/* Twitter Logo  */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" width={30} height={30} />
            </div>

            {/* Menu  */}
            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon}/>
                <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
                <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
                <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
                <SidebarMenuItem text="Profile" Icon={UserIcon}/>
                <SidebarMenuItem text="More" Icon={EllipsisHorizontalIcon}/>
            </div>

                {/* button  */}

            <button className="text-black bg-blue-400 rounded-full w-56 h-[52px] text-lg font-bold shadow-sm hover:brightness-95">Tweet</button>

                {/* miniprofile  */}

            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png"
                alt="user-img"
                className="h-6 w-6 rounded-full xl:mr-2"/>

                <div className="leading-5 rounded-full xl:mr-2">
                    <h4 className="font-bold">manishkumar</h4>
                    <p className="text-gray-500">@codewithmanish</p>
                </div>
                <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
                
            </div>
        </div>
    )
}