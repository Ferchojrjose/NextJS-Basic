import Image from "next/image"
import { IoBrowsers, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5"
import { SidebarItems } from "./SidebarItems"


//* This is the Sidebar component
const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsers size={30} />,
        title: 'Dashboard',
        subtitle: 'Data Overview'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30} />,
        title: 'Counter',
        subtitle: 'Counter Example'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={30} />,
        title: 'Pokemons',
        subtitle: 'Pokemons Example'
    },
]


export const Sidebar = () => {
    return (
        <div id="menu" style={{ width: '300px' }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2" />
                    First<span className="text-blue-500">Dash</span>.
                </h1>
            </div>


            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back.</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt="User avatar"
                            width={50}
                            height={50}
                            priority
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Fernando Serrano
                    </span>
                </a>
            </div>


            <div id="nav" className="w-full px-6">

                {
                    menuItems.map((item) => (
                        <SidebarItems key={item.title} {...item} />
                    ))
                }

            </div>
        </div>
    )
}
