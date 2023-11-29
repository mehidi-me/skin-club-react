"use client";;
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PenLineIcon } from "lucide-react";
import { SurgicalHistory as SurgicalHistoryData } from "@/api/appointmentDetailsData";


type Props = {}

export default function SurgicalHistory({ }: Props) {
    return (
        <>
            <div className="flex justify-between">
                <p>Surgical History</p>
                <p className="p-2 bg-gray-100/50 rounded-xl">
                    <PenLineIcon />
                </p>
            </div>
            <Separator className="my-4" />
            <ScrollArea className="h-[200px]">
                {SurgicalHistoryData.map((v: any, key: number) => (
                    <div key={key} className="p-4 mb-4 bg-gray-100/50 rounded-xl">
                        <p>
                            {key + 1}. {v.title}
                        </p>
                        <div className="flex items-center justify-between p-2 px-4 text-xs">
                            <p>
                                <span>Date: </span>
                                <span className="text-foreground/50">{v.date}</span>
                            </p>
                            <p>
                                <span>Reason: </span>
                                <span className="text-foreground/50">{v.reason}</span>
                            </p>
                            <p>
                                <span>Location: </span>
                                <span className="text-foreground/50">{v.location}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </>
    )
}