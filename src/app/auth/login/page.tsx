"use client";

import { Button } from "@/components/ui/button";
import Image from "@/lib/Image";
import cardImg from "@/assets/auth/cardImg3.png";
import cardIcon from "@/assets/auth/cardIcon.png";
import googleImg from "@/assets/auth/google.png";
import twitterImg from "@/assets/auth/twitter.png";
import Link from "@/lib/Link"
import TextInput from "@/components/Common/Auth/TextInput";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const router = useNavigate();
  return (
    <div className="flex items-center justify-center w-full min-h-[80vh] md:h-full px-4 mb-20 pt-16 md:items-center md:px-10">
      <div className="grid w-full h-full max-w-5xl grid-cols-3 bg-white rounded-lg card">
        <div className="flex flex-col justify-between gap-6 lg:w-auto w-[100%] p-8 px-8 sm:px-16 card-text col-span-3 lg:col-span-2">
          <div className="flex flex-col w-[100%] gap-4  card-title">
            <h1 className="text-3xl lg:text-4xl sm:text-5xl">
              Welcome to Skin Club
            </h1>
            <p className="text-[#4C4D4F80] font-serif text-sm sm:text-lg lg:text-sm">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="underline text-base text-[#4C4D4F]"
              >
                Sign up
              </Link>
            </p>
          </div>

          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Jane@gmail.com"
          />
          <div>
            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="********"
              error="Not match"
            />
            <Link
              className="text-xs text-[#4C4D4F80] underline flex justify-end"
              href="/forgot-password"
            >
              Forgot your password
            </Link>
          </div>
          <div className="flex items-center space-x-2 mt-2 mb-4">
            <Checkbox id="newsletter" />
            <label
              htmlFor="newsletter"
              className="text-sm text-[#4C4D4F] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>

          <div className="flex flex-col items-center w-full gap-2">
            <Button
              className="w-full py-6 rounded-full"
              onClick={() => router("/")}
            >
              Login
            </Button>

            <p className="text-xs text-[#4C4D4F80] ">
              Don’t have an account?{" "}
              <Link
                className="text-xs text-[#4C4D4F] underline"
                href="/register"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-[#4C4D4F80] after:mt-0.5 after:flex-1 after:border-t after:border-[#4C4D4F80]">
            <p className="mx-4 mb-0 text-center  text-[#4C4D4F80]">Or</p>
          </div>

          <Button
            className="w-full py-6 rounded-full border border-[#4C4D4F] bg-white text-[#4C4D4F] hover:bg-transparent hover:text-[#4C4D4F]"
            onClick={() => router("/")}
          >
            <Image src={googleImg} alt="google" className="mr-3" />
            Continue with Google
          </Button>
          <Button
            className="w-full py-6 rounded-full border border-[#4C4D4F] bg-white text-[#4C4D4F] hover:bg-transparent hover:text-[#4C4D4F]"
            onClick={() => router("/")}
          >
            <Image src={twitterImg} alt="Twitter" className="mr-3" />
            Continue with Twitter
          </Button>
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
