import React from 'react'
import { Input } from '../ui/input'
import ChatSeparator from './ChatSeparator'
import { Button } from '../ui/button'
import { PaperclipIcon, ScanFaceIcon, SendIcon } from 'lucide-react'
import MessageBoxItem from './MessageBoxItem'

type Props = {}

export default function MessageBox({ }: Props) {
    return (
        <>
            <div className="relative flex flex-col justify-end h-full p-4 overflow-scroll gap-y-8">
                <p className="absolute block px-4 py-2 text-sm rounded-full text-foreground top-10 left-1/2 bg-slate-100 ">13 August, 2023</p>
                <div className='flex flex-col justify-end'>
                    <MessageBoxItem
                        message='What Should i work on before my next visit ?It is a long established fact that a reader will be distracted by the readable content. You’ll stop running in circles with your team and clients, and finally feel like you’ve got it together.'
                        sender='John Doe'
                        time='14 Aug, 2023'
                    />
                    <ChatSeparator text={"Today"} />
                    <MessageBoxItem
                        message='What Should i work on before my next visit ?It is a long established fact that a reader will be distracted by the readable content. You’ll stop running in circles with your team and clients, and finally feel like you’ve got it together.'
                        sender='John Doe'
                        time='14 Aug, 2023'
                        sent
                    />
                </div>
            </div>
            <div className="flex w-full p-4 rounded-md gap-x-4">
                <div className="flex-col justify-between hidden w-full h-40 px-8 py-4 border lg:flex rounded-2xl">
                    <Input placeholder="Write messages...." className="w-full p-0 border-none focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none focus-visible:rounded-none rounded-xl" />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-4">
                            <ScanFaceIcon strokeWidth={1} />
                            <PaperclipIcon strokeWidth={1} />
                        </div>
                        <Button size="lg" className="rounded-full">Send</Button>
                    </div>
                </div>
                <div className="flex w-full bg-white rounded-md gap-x-4 lg:hidden">
                    <Input className="py-6 text-primary-foreground rounded-xl" placeholder="Write message..." />
                    <div className="flex items-center justify-between w-32">
                        <SendIcon strokeWidth={1} />
                        <PaperclipIcon strokeWidth={1} />
                        <p className="text-2xl">🙂</p>
                    </div>
                </div>
            </div>
        </>
    )
}