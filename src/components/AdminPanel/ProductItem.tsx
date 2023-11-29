import React from "react";
import ProductImg from "@/assets/product/serum1.png";
import ReviewImg from "@/assets/product/review.svg";
import Image from "@/lib/Image";
import { Button } from "../ui/button";

function ProductItem() {
  return (
    <div className=" bg-white w-full shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex p-4 gap-4">
      <Image alt="Product Image" src={ProductImg} className="w-30" />
      <div className="flex flex-col gap-1 mt-2">
        <h3 className="text-base text-[#000000]">Vitamin A Night Serum</h3>
        <p className="text-xs text-[#4C4D4F]">30 ML/1FL OZ</p>
        <p className="text-xs text-[#4C4D4F80]">Brightening Vitamin A Serum</p>
        <div className="flex gap-2">
          <div className="flex">
            <Image alt="review" width={12} src={ReviewImg} />
            <Image alt="review" width={12} src={ReviewImg} />
            <Image alt="review" width={12} src={ReviewImg} />
            <Image alt="review" width={12} src={ReviewImg} />
            <Image alt="review" width={12} src={ReviewImg} />
          </div>
          <p className="text-xs text-[#4C4D4F]">30 reviews</p>
        </div>
        <div className="flex gap-2">
          <p className="text-xs text-[#000000]">$69.00</p>
          <del className="text-xs text-[#000000]">$90.00</del>
        </div>
        <Button className="rounded-full mt-4">Remove</Button>
      </div>
    </div>
  );
}

export default ProductItem;
