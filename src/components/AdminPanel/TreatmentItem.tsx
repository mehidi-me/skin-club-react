import React from "react";
import DeleteIcon from "@/assets/icons/delete.svg";
import EditIcon from "@/assets/icons/edit.svg";
import Image from "@/lib/Image";
import { Button } from "../ui/button";

function TreatmentItem() {
  return (
    <div className="border border-[#4C4D4F33] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex p-4 gap-8">
      <div className="flex flex-col gap-1 mt-2">
        <h3 className="text-base text-[#000000] font-[700]">
          Anti Wrinkle Section
        </h3>
        <p className="text-xs text-[#4C4D4F]">8 Sections</p>
        <p className="text-xs text-[#4C4D4F80]">Medicine name/QTY</p>
        <p className="text-xs text-[#000000]">$69.00</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="icon">
          <Image src={DeleteIcon} alt="delete" />
        </Button>
        <Button variant="outline" size="icon">
          <Image src={EditIcon} alt="edit" />
        </Button>
      </div>
    </div>
  );
}

export default TreatmentItem;
