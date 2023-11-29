import React from 'react'

type Props = {
    sent?: boolean,
    message: string,
    sender: string,
    time: string
}

export default function MessageBoxItem({ message, sender, sent, time }: Props) {
    const bgColor = sent ? "bg-[#E7F5FA] self-end" : "bg-[#FFF9F1]"
    return (
        <div className={`w-full p-4 lg:w-2/3 rounded-xl ${bgColor}`}>
            <div className="flex items-center mb-4 gap-x-2">
                <p>{sender}</p>
                <p className="text-foreground/50">{time}</p>
            </div>
            <p className="text-foreground/50">
                {message}
            </p>
        </div>
    )
}