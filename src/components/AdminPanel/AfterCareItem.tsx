import React from "react";
import pdfPreview from "@/assets/after-care/pdf_preview.png";
import pdfIcon from "@/assets/after-care/pdf_icon.png";
import Image from "@/lib/Image";

function AfterCareItem() {
  return (
    <div className="w-72 bg-white w-full shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative">
      <Image src={pdfPreview} alt="pdf" className="w-full h-full" />
      <div className="absolute bottom-0 left-0 w-full h-14 bg-white rounded-b-xl">
        <div className="flex items-center mb-3 ml-4">
          <Image src={pdfIcon} alt="pdf icon" />
          <p className="text-base font-[500] text-[#343434] ml-4">
            Hair Treatment After care
          </p>
        </div>
      </div>
    </div>
  );
}

export default AfterCareItem;
