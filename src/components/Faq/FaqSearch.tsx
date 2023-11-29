import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon, Tally1 } from 'lucide-react'

type Props = {}

export default function FaqSearch({ }: Props) {
    return (
        <div>
            <div className="flex items-center justify-between w-full px-4 bg-white rounded-xl">
                <Input className="px-0 border-none placeholder:text-foreground/40" placeholder="Search for answers here..." />
                <Tally1 strokeWidth={0.4} />
                <SearchIcon className="w-4 h-4" />
            </div>
            <div className="flex items-center px-4 mt-2 text-foreground/50 gap-x-4">
                <p className="text-xs">Frequent searches: </p>
                <p className="text-xs underline">How to book appointments?</p>
                <p className="text-xs underline">How to cancel appointments?</p>
                <p className="text-xs underline">How to reschedule appointments?</p>
            </div>
        </div>
    )
}