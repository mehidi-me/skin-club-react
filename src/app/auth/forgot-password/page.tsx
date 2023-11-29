"use client";

import { Button } from "@/components/ui/button";
import Image from "@/lib/Image";
import cardImg from "@/assets/auth/cardImg.png";
import cardIcon from "@/assets/auth/cardIcon.png";
import Link from "@/lib/Link"
import TextInput from "@/components/Common/Auth/TextInput";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const router = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-[80vh] md:h-full px-4 pt-16 md:items-center md:px-10">
      <div className="flex items-start w-full h-full max-w-5xl bg-white rounded-lg md:items-stretch card justify-between">
        <div className="flex flex-col justify-between gap-6 p-8 px-8 sm:px-16 card-text">
          <div className="flex flex-col w-[100%] gap-4 lg:w-4/5 card-title">
            <h1 className="text-3xl lg:text-4xl sm:text-5xl">
              Forgot your password?
            </h1>
            <p className="text-[#4C4D4F80] sm:text-[#4C4D4F] font-serif text-sm sm:text-lg lg:text-sm">
              No worries, enter your email below to get instructions to reset
              your password
            </p>
          </div>

          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Jane@gmail.com"
          />
          <div className="flex flex-col items-center w-full gap-2">
            <Button
              className="w-full py-6 rounded-full"
              onClick={() => router("/reset-password")}
            >
              Reset Password
            </Button>
            <Link className="text-xs text-[#4C4D4F80] underline" href="/login">
              I remember my password
            </Link>
          </div>
        </div>
        <div className="relative hidden card-img lg:block">
          <Image
            src={cardImg}
            alt="Card"
            width={384}
            className="w-full h-full"
          />
          <Image src={cardIcon} alt="Card" className="absolute top-0 right-0" />
        </div>
      </div>
    </div>
  );
}
