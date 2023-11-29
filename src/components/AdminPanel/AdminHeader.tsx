import React from "react";
import FaqHeader from "../Faq/FaqHeader";
import { Button } from "../ui/button";

type Props = {
  title: string;
  text: string;
  buttonText: string;
  Modal: any;
};

function AdminHeader({ title, text, buttonText, Modal }: Props) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-3xl font-[700] text-[#4C4D4F]">{title}</h2>
        <p className="text-base text-[#4C4D4F]">{text}</p>
      </div>
      {/* <Button onClick={buttonOnClick}>{buttonText}</Button> */}
      <Modal BText={buttonText} />
    </div>
  );
}

export default AdminHeader;
