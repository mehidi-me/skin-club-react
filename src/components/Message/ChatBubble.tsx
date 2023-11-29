import React from 'react'

type Props = {
    type: "send" | "receive";
    message: String;
    sender?: String
}

export default function ChatBubble({ type, message, sender }: Props) {
    return (
        <>
            {
                type == "receive" ? (
                    <div className="flex flex-col gap-y-2">
                        <p className="ml-4 text-[10px] text-secondary-foreground/50">{sender}</p>
                        <div className="bg-[#E7F5FA] w-80 p-4 rounded-xl">
                            <p className="text-sm">
                                {
                                    message
                                }
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col self-end gap-y-2">
                        <div className="bg-[#FFF9F1] w-80 p-4 rounded-xl">
                            <p className="text-sm">
                                {message}
                            </p>
                        </div>
                    </div>
                )
            }

        </>
    )
}