
import treatmentImg from "@/assets/overview/treatment.png";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  currentDetails: any;
};

export default function OverviewTreatmentDetails({ currentDetails }: Props) {
  return (
    <>
      <p className="text-lg font-medium lg:text-3xl">Treatment Details</p>
      <div className="flex flex-col gap-4 p-4 bg-gray-100/50 rounded-xl">
        <div className="w-full">
          <img
            src={currentDetails.thumbnail}
            className="w-full h-full"
            alt="Treatment"
            width={500}
            height={400}
          />
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          eget velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget
          velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit
          non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed commodo eget velit non
          luctus. Duis at enim eu elit facilisis fermentum.
        </p>
        <p className="text-base font-bold lg:text-xl">
          {currentDetails.doctor}
        </p>
        <Button variant="outline" className="self-end py-6 rounded-xl">
          View Details
        </Button>
      </div>
    </>
  );
}
