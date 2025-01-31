import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Page Description',
    keywords: ['Contact Page', 'Fernando', 'Keywords'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}