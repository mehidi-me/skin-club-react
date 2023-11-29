"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { AppointmentDetails } from "@/api/appointmentDetailsData";

type Props = {};

export default function Overview2Header({}: Props) {
  return (
    <div className="flex flex-col items-start justify-between w-full md:flex-row gap-y-4">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-3xl">
          {AppointmentDetails.case}{" "}
          <span className="text-lg">/ {AppointmentDetails.doctorName}</span>
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <p className="text-foreground/50">
            Date:{" "}
            <span className="text-gray-700">{AppointmentDetails.date}</span>
          </p>
          <p className="text-foreground/50">
            Time:{" "}
            <span className="text-gray-700">{AppointmentDetails.time}</span>
          </p>
          <p className="text-foreground/50">
            Studio:{" "}
            <span className="text-gray-700">{AppointmentDetails.studio}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="items-center justify-between hidden px-2 py-0 bg-white border-none rounded-full lg:flex ">
          <Input
            type="text"
            placeholder="Search"
            className="text-base border-none rounded-full"
          />
          <SearchIcon className="w-5" />
        </div>
        <Button variant={"outline"} className="border-none rounded-full">
          Support & FAQ{"'"}s
        </Button>
        <Button variant={"default"} className="border-none rounded-full">
          Book an appointment
        </Button>
      </div>
    </div>
  );
}
