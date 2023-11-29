import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React from 'react'

type Props = {}

export default function MessageListHead({ }: Props) {
    return (
        <div className="flex items-center justify-between">
            <p className="text-3xl">Messages</p>
            <div className="flex items-center gap-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <p>12 New</p>
            </div>
            <Button
                size="icon" variant="secondary">
                <PlusIcon />
            </Button>
        </div>
    )
}