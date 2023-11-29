"use client";;
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { SidebarItem } from "./SidebarItem";

type Props = {
    text: string,
    links: {
        link: string,
        text: string,
    }[],
}


export function SingleAccordion({ text, links }: Props) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
                <AccordionTrigger className="px-4 py-4 text-base shadow-none rounded-xl hover:no-underline hover:bg-secondary font-[400]">
                    {text}
                </AccordionTrigger>
                <AccordionContent className="pl-2">
                    {
                        links.map((linkItem) => (
                            <SidebarItem key={linkItem.link} link={linkItem.link} text={linkItem.text} />
                        ))
                    }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
