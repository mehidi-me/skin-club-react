import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

type Props = {
    text: string
}

export default function TreatmentListItem({ text }: Props) {
    return (
        <div className='flex items-center gap-4 text-foreground/50'>
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-base leading-none lg:text-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {text}
            </label>
        </div>
    )
}