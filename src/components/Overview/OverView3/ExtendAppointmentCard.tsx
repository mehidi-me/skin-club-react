"use client";;
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EditIcon, ExternalLink, ExternalLinkIcon, MessageCircleIcon, PhoneCallIcon } from "lucide-react";
import OverviewListParagraph from "@/components/Overview/OverviewListParagraph";


type Props = {}

export default function ExtendAppointmentCard({ }: Props) {
    return (
        <>
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <p>Current Appointment</p>
                    <p className="text-2xl">Jane Doe</p>
                    <p className="text-foreground/50">For PRP Injections</p>
                    <p className="w-2/3 text-foreground/50">It is a long established fact that a reader will be distracted by the readable.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                        <ExternalLinkIcon className="w-5" />
                    </Button>
                </div>
            </div>
            <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                    <MessageCircleIcon className="w-5" />
                </Button>
                <Button variant="secondary" size="sm">
                    <PhoneCallIcon className="w-5" />
                </Button>
            </div>
            <div className="flex items-center justify-between">
                <p>Patient Details</p>
            </div>
            <div className="flex flex-col gap-4 lg:ml-4">
                <div className="flex items-center justify-between">
                    <p className="w-1/3 font-medium">D.O.B</p>
                    <p className="w-1/3 text-sm text-foreground/50">14 Aug, 1995</p>
                    <p className="w-1/3 font-medium ">Allergies</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="w-1/3 font-medium">Age</p>
                    <p className="w-1/3 text-sm text-foreground/50">29 Y</p>
                    <p className="w-1/3 font-medium ">Peanuts</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="w-1/3 font-medium">Height</p>
                    <p className="w-1/3 text-sm text-foreground/50">185 cm</p>
                    <p className="w-1/3 font-medium ">Pollen</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="w-1/3 font-medium">Weight</p>
                    <p className="w-1/3 text-sm text-foreground/50">75 kg</p>
                    <p className="w-1/3 font-medium ">Household Chemicals</p>
                </div>
            </div>
            <div className="">
                <OverviewListParagraph
                    title='Medical History'
                    listItems={[
                        "Patient suffers from dust allergy",
                        "Patient had a major accident last year and lost his hearing."
                    ]}
                    text=''
                />
                <OverviewListParagraph
                    title='Ongoing Treatments'
                    listItems={[
                        "PRP Injections",
                        "Dermal Fillers"
                    ]}
                    text=''
                />
            </div>
            <div className="flex items-center justify-center">
                <p className="underline cursor-pointer">View details</p>
            </div>
        </>
    )
}