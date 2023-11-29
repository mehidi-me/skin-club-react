"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import MessageBox from "@/components/Message/MessageBox";
import MessageListHead from "@/components/Message/MessageList/MessageListHead";
import MessageListItem from "@/components/Message/MessageList/MessageListItem";
import { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";

export default function Message() {
    const [pageScreen, setPageScreen] = useState("list")
    return (
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 p-0 gap-4 rounded-md min-h-[90vh] h-full md:p-6 bg-secondary">
            <div className="flex flex-col w-full col-span-1 p-4 bg-white rounded-xl gap-y-4">
                {
                    pageScreen === "list" ? (
                        <>
                            <MessageListHead />
                            <Select>
                                <SelectTrigger className="w-full bg-gray-100 border-none">
                                    <SelectValue placeholder="All Messages" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex flex-col gap-4 h-[80vh] overflow-scroll">
                                <MessageListItem setPageScreen={setPageScreen} />
                                <MessageListItem active setPageScreen={setPageScreen} />
                                <MessageListItem setPageScreen={setPageScreen} />
                                <MessageListItem setPageScreen={setPageScreen} />
                                <MessageListItem setPageScreen={setPageScreen} />
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col h-full col-span-2 overflow-hidden bg-white rounded-xl">
                            <div className="flex items-center p-4 bg-gray-100 gap-x-4">
                                <ArrowLeftIcon onClick={() => setPageScreen("list")} className="w-5 cursor-pointer"/>
                                <p className="text-sm">John Doe</p>
                            </div>
                            <MessageBox />
                        </div>
                    )
                }
            </div>
            <div className="flex-col hidden h-full col-span-2 bg-white rounded-xl lg:flex">
                <MessageBox />
            </div>
        </div>
    )
}

