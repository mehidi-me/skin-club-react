import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PlusIcon, XIcon } from 'lucide-react'
import React from 'react'

type Props = {
    text: string
    type: string
}

export default function OverviewRecordSingle({ type, text }: Props) {
    return (
        <Card className="w-full bg-transparent border-0">
            <CardContent className='p-2 px-4 font-normal text-foreground'>
                <div className='flex items-center justify-between w-full'>
                    <p className='text-md'>{text}</p>
                    <Button size="sm" variant="secondary" className='bg-white/50'>
                        {
                            type == "cancel" ? (<XIcon className='w-4 h-4' />) : (<PlusIcon className='w-4 h-4' />)
                        }
                    </Button>
                </div>
                <div></div>
            </CardContent>
        </Card>
    )
}