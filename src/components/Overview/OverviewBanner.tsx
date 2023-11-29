import React from "react";
import { Button } from "../ui/button";
import "./Overview.css";

type Props = {};

export default function OverviewBanner({}: Props) {
  return (
    <div
      className={`flex flex-col justify-center p-6 rounded-lg w-full h-[345px] relative banner`}
    >
      <div className="flex flex-col items-start gap-y-12">
        <div className="flex flex-col w-full lg:w-2/5 gap-y-2">
          <p className="text-sm text-left">Recommendations & Accessories</p>
          <h3 className="text-2xl text-left">
            Discover Personalized Care Treatment & Products Just For You
          </h3>
        </div>
        <Button
          variant={"outline"}
          className="bg-transparent border-black rounded-full"
          size={"lg"}
        >
          Discover More
        </Button>
      </div>
    </div>
  );
}
