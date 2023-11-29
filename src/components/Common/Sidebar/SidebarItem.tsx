"use client";
import { Button } from "@/components/ui/button"

import Link from "@/lib/Link"

type Props = {
    link: string,
    text: string,
}


export function SidebarItem({ link, text }: Props) {
    return (
        <Link href={link}>
            <Button variant={"secondary"} className="justify-start w-full py-6 text-base font-[400] text-left bg-transparent">
                {text}
            </Button>
        </Link>
    )
}
