import React from 'react'

type Props = {
    title: string;
    text: string
}

export default function FaqHeader({ text, title}: Props) {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl">{title}</h2>
            <p className="text-sm">{text}</p>
        </div>
    )
}