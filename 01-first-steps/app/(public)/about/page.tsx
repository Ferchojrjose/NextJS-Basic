import { Metadata } from "next";



export const metadata: Metadata = {
    title: 'About Page',
    description: 'Page Description',
    keywords: ['About Page', 'Fernando', 'Keywords'],
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}