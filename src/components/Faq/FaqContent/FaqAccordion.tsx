import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {
    title: string,
    content: string
}

export default function FaqAccordion({ title, content }: Props) {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">{title}</AccordionTrigger>
                <AccordionContent>
                    <div className='relative'>
                        {content}
                        {
                            content.split(" ").length > 100 && <div className='absolute bottom-0 w-full py-1 text-center underline bg-white'>View Detailed Answer</div>
                        }
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}