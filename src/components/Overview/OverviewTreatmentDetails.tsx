
import treatmentImg from "@/assets/overview/treatment.png";
import React from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import TreatmentProfile from "./Overview2/Modal/TreatmentProfile";

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

        <div className="flex items-center justify-start self-end">
          <div className="p-1 py-2 bg-gray-100 rounded-full">
            <Dialog>
              <DialogTrigger asChild>
              <Button variant="outline" className=" py-6 rounded-xl">
          View Details
        </Button>
              </DialogTrigger>
              <DialogContent className="max-h-screen overflow-y-scroll border-none lg:max-w-screen-lg">
                <TreatmentProfile />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
      </div>
    </>
  );
}
