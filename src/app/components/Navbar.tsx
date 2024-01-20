"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import localFont from 'next/font/local'

const myFont = localFont({ src: '../../fonts/Hacked-KerX.ttf' })

const subcomponents: { title: string; href: string; description: string }[] = [
    {
        title: "Caesar Cipher",
        href: "/caesar",
        description:
            "Basic substitution encryption shifting letters by a fixed amount for secure communication, named after Julius Caesar.",
    },
    {
        title: "Kama-sutra Cipher",
        href: "/kamasutra",
        description:
            "Ancient Indian encryption using positions from the Kama Sutra for unique and discreet message encoding.",
    },
    {
        title: "Pigpen Cipher",
        href: "/pigpen",
        description:
            "A symbolic encryption method using a grid of symbols to represent letters, often resembling a pigpen, for covert messaging.",
    },
    {
        title: "Atbash Cipher",
        href: "/atbash",
        description:
            "Substitute each letter with its mirror image, providing a simple yet effective code for concealed messages.",
    },
    {
        title: "ROT13 Cipher",
        href: "/rot13",
        description:
            "A cipher where each letter in the plaintext is shifted 13 positions and substituted.",
    },
]

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Railfence Cipher",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Route Cipher",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
]

const precomponents: { title: string; href: string; description: string }[] = [
    {
        title: "Playfair Cipher",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
]

export function Navbar() {

    return (
        <div className="flex items-center mt-10 mb-20">
            <Link  href="/">
                <h1 className={`${myFont.className} absolute ml-10 text-5xl`}>CIPHEROLOGY</h1>
            </Link>
            <div className="absolute mt-[40px] mr-10 right-0">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Subtitution Ciphers</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {subcomponents.map((subcomponent) => (
                                        <Link key={subcomponent.title} href={subcomponent.href}>
                                            <ListItem
                                                key={subcomponent.title}
                                                title={subcomponent.title}
                                            >
                                                {subcomponent.description}
                                            </ListItem>
                                        </Link>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Transposition Ciphers</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <Link key={component.title} href={component.href}>
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                            >
                                                {component.description}
                                            </ListItem>
                                        </Link>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Advanced Ciphers</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {precomponents.map((precomponent) => (
                                        <ListItem
                                            key={precomponent.title}
                                            title={precomponent.title}
                                            href={precomponent.href}
                                        >
                                            {precomponent.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Documentation
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
