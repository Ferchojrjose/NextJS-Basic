'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import style from './css/ActiveLink.module.css';


//* ActiveLink component
interface Props {
    name: string;
    href: string;
}


export const ActiveLink = ({ name, href }: Props) => {

    const pathname = usePathname();

    return (
        <Link
            className={`${style.link} ${(pathname === href) && style['active-link']}`}
            href={href}
        >
            {name}
        </Link>
    )
}
