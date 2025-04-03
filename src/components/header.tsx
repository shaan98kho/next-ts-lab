"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItm {
    label: string,
    path: string
}

interface ActiveLinkProps {
    href: NavItm[],
    navStyle?: string
}

export default function Nav({href, navStyle=""}: ActiveLinkProps) {
    const path = usePathname()
    
    return <>
        <nav className={`nav navbar ${navStyle}`}>
            {
                href.map((link, index) => {
                    
                    return <Link 
                        href={`${(link.path)}`} 
                        className={path === link.path ? "active" : ""}
                        key={index}
                    >
                        {link.label}
                    </Link>
                })
            }
        </nav>
    </>
}