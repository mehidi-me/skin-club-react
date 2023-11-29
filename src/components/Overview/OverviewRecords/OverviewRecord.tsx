import { Separator } from '@/components/ui/separator'
import React from 'react'
import OverviewRecordSingle from './OverviewRecordSingle'
import { Card } from '@/components/ui/card'

type Props = {
    cardData: string[];
    title: string
}

export default function OverviewRecord({ title, cardData }: Props) {
    return (
        <Card className='flex flex-col w-full col-span-1 bg-white rounded-xl'>
            <OverviewRecordSingle text={title} type='add' />
            <div className='bg-gray-100/50'>
                {
                    cardData.map(card => (
                        <OverviewRecordSingle key={card} text={card} type="cancel" />
                    ))
                }
            </div>
        </Card>
    )
}