import React from "react";
import pdfPreview from "@/assets/after-care/pdf_preview.png";
import pdfIcon from "@/assets/after-care/pdf_icon.png";
import Image from "@/lib/Image";
import Link from "@/lib/Link"

function AfterCare() {
  const Card = () => (
    <div className="relative duration-500 w-full bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl">
      <Link href="/after-care/1">
        <Image src={pdfPreview} alt="pdf" className="w-full h-full" />
        <div className="absolute bottom-0 left-0 w-full bg-white h-14 rounded-b-xl">
          <div className="flex items-center mb-3 ml-4">
            <Image src={pdfIcon} alt="pdf icon" />
            <p className="text-base font-[500] text-[#343434] ml-4">
              Hair Treatment After care
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
  return (
    <div className="bg-[#FFF9F1] w-full p-6">
      <p className="text-2xl text-[#4C4D4F]  font-[700]">After Care</p>

      <div className="grid justify-center w-full grid-cols-1 mt-10 mb-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-y-20 gap-x-14">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default AfterCare;
