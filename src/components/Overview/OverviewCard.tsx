import React from 'react'
import { Button } from '../ui/button'
import { EditIcon, PenIcon, PenLineIcon } from 'lucide-react'

type Props = {
    bg: string,
    icon?: React.ReactNode,
    subtitle: string,
    title: string,
    text: React.ReactNode,
    footer: React.ReactNode
}

export default function OverviewCard({ bg, icon, subtitle, text, title, footer }: Props) {
    return (
        <div className={`flex flex-col p-6 rounded-lg justify-between h-[206px] lg:w-full relative ${bg}`}>
            {
                icon && (
                    <Button className='absolute top-4 right-4' variant={'secondary'} size={'icon'}>
                        {icon}
                    </Button>
                )
            }
            <div className="flex flex-col gap-y-2 text-foreground">
                <p className="text-sm">
                    {subtitle}
                </p>
                <p className="text-2xl">{title}</p>
                <p className="text-sm">
                    {text}
                </p>
            </div>
            <div className="flex flex-col text-sm gap-y-1">
                {footer}
            </div>
        </div>
    )
}