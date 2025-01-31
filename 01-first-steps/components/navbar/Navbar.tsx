import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "./ActiveLink"


//* List of items in the navbar
const navItemList = [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
]

export const Navbar = () => {

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 rounded">

            <Link className="flex items-center" href={"/"}>
                <HomeIcon className="mr-1" />
                <span> Home </span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItemList.map((item) => (
                    <ActiveLink key={item.href} name={item.name} href={item.href} />
                ))
            }
        </nav>
    )
}
