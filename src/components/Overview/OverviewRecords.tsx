import React from "react";
import { Separator } from "../ui/separator";
import OverviewRecordSingle from "./OverviewRecords/OverviewRecordSingle";
import OverviewRecord from "./OverviewRecords/OverviewRecord";
import Image from "@/lib/Image";
import { Button } from "../ui/button";
import OverviewTreatmentDetails from "./OverviewTreatmentDetails";

type Props = {
  currentDetails: any;
};

export default function OverviewRecords({ currentDetails }: Props) {
  return (
    <div className="grid grid-cols-1 lg:gap-4 lg:grid-cols-3">
      <div className="flex flex-col w-full col-span-1 gap-4 p-4 bg-white lg:px-8 rounded-xl">
        <p className="text-lg">Medical Records</p>
        <Separator />
        <OverviewRecord
          title="Allergies"
          cardData={["Eggs", "Peanuts", "Pollen", "Household Chemicals"]}
        />
        <OverviewRecord
          title="Previous Surgeries"
          cardData={["C - Section", "Appendix Removal", "Pollen"]}
        />
        <OverviewRecord
          title="Chronic Conditions"
          cardData={["IHD", "Chronic thyroid disorder"]}
        />
      </div>
      <div className="flex flex-col w-full col-span-2 gap-4 p-4 bg-white lg:px-8 rounded-xl">
        <OverviewTreatmentDetails currentDetails={currentDetails} />
      </div>
    </div>
  );
}
