import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { EditIcon, MessageCircleIcon, PhoneCallIcon } from 'lucide-react'
import { PatientDetails } from "@/api/appointmentDetailsData";
import React from 'react'

type Props = {}

export default function AppointmentCard({ }: Props) {
  return (
    <div className="flex flex-col col-span-1 gap-4 p-4 bg-white rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-2xl">{PatientDetails.name}</p>
          <p className="text-foreground/50">For PRP Injections</p>
        </div>
        <div className="flex gap-2">
          <div>
            <Button variant="secondary" size="sm">
              <MessageCircleIcon className="w-5" />
            </Button>
            <p className="text-[8px]">instant Message</p>
          </div>
          <div>
            <Button variant="secondary" size="sm">
              <PhoneCallIcon className="w-5" />
            </Button>
            <p className="text-[8px]">Call via mobile</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 mt-4 bg-gray-100/60 rounded-xl">
        <p className="text-xs text-foreground/50">Appointment</p>
        <div className="flex justify-around w-full p-6">
          <div className="flex flex-col items-center w-full">
            <p className="text-3xl">{PatientDetails.past}</p>
            <p>Past</p>
          </div>
          <div className="w-2">
            <Separator orientation="vertical" />
          </div>
          <div className="flex flex-col items-center w-full">
            <p className="text-3xl">{PatientDetails.upcoming}</p>
            <p>Upcoming</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>Patient Details</p>
        <Button variant="secondary" size="sm">
          <EditIcon className="w-5" />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="w-1/3 font-medium">D.O.B</p>
          <p className="w-1/3 text-sm text-foreground/50">{PatientDetails.dob}</p>
          <p className="w-1/3 font-medium ">Allergies</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-1/3 font-medium">Age</p>
          <p className="w-1/3 text-sm text-foreground/50">{PatientDetails.age}</p>
          <p className="w-1/3 text-sm text-foreground/50 ">Peanuts</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-1/3 font-medium">Height</p>
          <p className="w-1/3 text-sm text-foreground/50">{PatientDetails.height}</p>
          <p className="w-1/3 text-sm text-foreground/50 ">Pollen</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-1/3 text-sm text-foreground/50">Weight</p>
          <p className="w-1/3 text-sm text-foreground/50">{PatientDetails.weight}</p>
          <p className="w-1/3 text-sm text-foreground/50 ">Household Chemicals</p>
        </div>
      </div>
    </div>
  )
}