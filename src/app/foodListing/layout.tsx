import Link from "next/link";
import Nav from "@/components/header";



export default function foodListingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav href={[
                {label:"Dashboard", path: "/dashboard"},
                {label:"Listings", path:"/listings"},
                {label:"Reviews", path:"/reviews"}
            ]} navStyle="navbar2"/>
            <button>Back</button>
            <div className="food-listing dashboard">
                {children}
            </div>
        </>
    )
}