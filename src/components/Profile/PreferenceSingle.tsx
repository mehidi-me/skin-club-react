import React, { useState } from 'react'
import { Separator } from '../ui/separator'
import { Switch } from '../ui/switch'

type Props = {
    title: string,
    text: string
}

export default function PreferenceSingle({ text, title }: Props) {
    const [checked, setChecked] = useState(false)
    return (
        <>
            <div className='flex items-start justify-between w-full text-foreground/50'>
                <div className='flex flex-col gap-y-2'>
                    <p className={`ml-3 text-md ${checked ? "text-black" : "font-medium "}`}>{title}</p>
                    <p className='ml-3 text-md'>{text}</p>
                </div>
                <div>
                    <Switch checked={checked} onClick={() => setChecked(prevValue => !prevValue)} />
                </div>
            </div>
            <Separator />
        </>
    )
}