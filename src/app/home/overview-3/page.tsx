"use client";;
import { PenLineIcon } from "lucide-react";
import OverviewCard from "@/components/Overview/OverviewCard";
import Overview3Header from "@/components/Overview/OverView3/Overview3Header";
import ExtendAppointmentCard from "@/components/Overview/OverView3/ExtendAppointmentCard";
import ScheduleTable from "@/components/Overview/OverView3/ScheduleTable";

export default function Overview3() {
    return (
        <div className="flex flex-col w-full h-full p-6 px-2 lg:px-6 bg-secondary gap-y-8">
            <Overview3Header />
            <div className="grid items-start justify-start grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="col-span-1">
                    <OverviewCard
                        bg="bg-[#E1D0C1]"
                        subtitle="Todays Appointments"
                        title="8/12"
                        text={
                            <>
                                <span className="text-foreground/50">Next appointment at: </span>
                                <span>9:00 am</span>
                            </>
                        }
                        footer={
                            <>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm">Progress</p>
                                    <p className="text-sm">75%</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-full h-0.5 bg-black/30"></div>
                                    <div className="absolute w-1/2 h-0.5 bg-black/70"></div>
                                </div>
                            </>
                        }
                    />
                </div>
                <div className="col-span-1">
                    <OverviewCard
                        bg="bg-[#C2D5DC]"
                        subtitle="Canceled Appointments"
                        title="2/12"
                        text={
                            <>
                                <span className="text-foreground/50">Empty Slots: </span>
                            </>
                        }
                        footer={
                            <>
                                <div className="flex gap-4">
                                    <span className="px-4 bg-gray-100 text-foreground rounded-xl">10:30 - 12:00</span>
                                    <span className="px-4 bg-gray-100 text-foreground rounded-xl">10:30 - 12:00</span>
                                </div>
                            </>
                        }
                    />
                </div>
                <div className="flex flex-col col-span-1 row-span-2 gap-4 p-4 bg-white rounded-xl">
                    <ExtendAppointmentCard />
                </div>
                <div className="flex flex-col col-span-1 overflow-hidden bg-white lg:col-span-2 rounded-xl">
                    <ScheduleTable />
                </div>
            </div>
        </div>
    )
}

