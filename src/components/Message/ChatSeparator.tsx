import React from 'react'

type Props = {
    text: String
}

export default function ChatSeparator({ text }: Props) {
    return (
        <div className="flex items-center justify-between w-full my-4">
            <div className="w-full h-0.5 bg-black/30" />
            <p className="w-32 text-xs text-center">{text}</p>
            <div className="w-full h-0.5 bg-black/30" />
        </div>
    )
}