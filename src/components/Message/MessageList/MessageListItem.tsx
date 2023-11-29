import React from 'react'

type Props = {
    active?: boolean,
    setPageScreen: React.Dispatch<React.SetStateAction<string>>,
}

export default function MessageListItem({ active, setPageScreen }: Props) {
    return (
        <div onClick={() => setPageScreen("message")} className={`flex cursor-pointer px-2 items-start py-4 gap-x-4 ${active ? 'bg-[#F8F8F8] rounded-xl' : 'bg-white border-b'} lg:pointer-events-none`}>
            <div className="mt-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2">
                <p>John Doe</p>
                <p className="text-sm">It is a long established fact that a reader will be distracted by the readable content...</p>
                <p className="mt-2 text-xs text-foreground/40">14 Aug, 2023, 12:45pm</p>
            </div>
        </div >
    )
}