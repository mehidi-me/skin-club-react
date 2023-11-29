"use client";
import logoImg from "@/assets/logo.png"
import ChatBubble from "@/components/Message/ChatBubble";
import ChatSeparator from "@/components/Message/ChatSeparator";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ClipboardIcon, PaperclipIcon, SendIcon } from "lucide-react";
import { Noto_Emoji } from "next/font/google";
import Image from "@/lib/Image";

export default function LiveChat() {
    return (
        <div className="flex flex-col w-full min-h-[90vh] h-full p-0 rounded-md md:p-6 bg-secondary">
            <div className="bg-[#F8F8F8] h-14 flex justify-center items-center">
                <Image src={logoImg} alt="Logo" width={141} height={36} />
            </div>
            <div className="flex flex-col justify-end h-full p-4 overflow-scroll bg-white rounded-md gap-y-8">
                <ChatSeparator text={"10:17 AM"} />
                <ChatBubble type="receive" message="Hi" sender="Support Team" />
                <ChatBubble type="send" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt?" sender="Support Team" />
                <ChatBubble type="receive" message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in fuga maiores repellat possimus." sender="Support Team" />
            </div>
            <div className="flex w-full p-4 bg-white rounded-md gap-x-4">
                <Input className="py-6 text-primary-foreground rounded-xl" placeholder="Write message..." />
                <div className="flex items-center justify-between w-32">
                    <SendIcon strokeWidth={1} />
                    <PaperclipIcon strokeWidth={1} />
                    <p className="text-2xl">🙂</p>
                </div>
            </div>
        </div>
    )
}
