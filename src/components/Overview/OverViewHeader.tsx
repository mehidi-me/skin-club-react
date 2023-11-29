import React from "react";
import { Button } from "../ui/button";
import { userName } from "@/api/overviewPageData";

type Props = {};

export default function OverViewHeader({}: Props) {
  return (
    <div className="flex flex-col items-start justify-between w-full md:flex-row gap-y-4">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-3xl">Welcome, {userName}</h2>
        <p className="text-sm">Check the latest updates on your account</p>
      </div>
      <div className="flex items-center gap-x-4">
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
