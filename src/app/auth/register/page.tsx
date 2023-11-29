"use client";

import { Button } from "@/components/ui/button";
import Image from "@/lib/Image";
import cardImg from "@/assets/auth/cardImg4.png";
import cardIcon from "@/assets/auth/cardIcon.png";
import facebookImg from "@/assets/auth/facebook.png";
import googleImg from "@/assets/auth/google.png";
import twitterImg from "@/assets/auth/twitter.png";
import Link from "@/lib/Link"
import TextInput from "@/components/Common/Auth/TextInput";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Register() {
  const router = useNavigate();
  return (
    <div className="flex items-center justify-center w-full min-h-[80vh] md:h-full px-4 mb-20 pt-16 md:items-center md:px-10">
      <div className="grid w-full h-full max-w-5xl grid-cols-3 bg-white rounded-lg card">
        <div className="flex flex-col justify-between gap-6 lg:w-auto w-[100%] p-8 px-8 sm:px-16 card-text col-span-3 lg:col-span-2">
          <div className="flex flex-col w-[100%] gap-4  card-title">
            <h1 className="text-3xl lg:text-4xl sm:text-5xl">
              Create an account
            </h1>
            <p className="text-[#4C4D4F80] font-serif text-sm sm:text-lg lg:text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="underline text-base text-[#4C4D4F]"
              >
                Log in
              </Link>
            </p>
          </div>

          <Button
            className="w-full py-6 rounded-full border border-[#4C4D4F] bg-white text-[#4C4D4F] hover:bg-transparent hover:text-[#4C4D4F]"
            onClick={() => router("/")}
          >
            <Image src={facebookImg} alt="facebook" className="mr-3" />
            Continue with Facebook
          </Button>
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
          <div className="mt-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-[#4C4D4F80] after:mt-0.5 after:flex-1 after:border-t after:border-[#4C4D4F80]">
            <p className="mx-4 mb-0 text-center  text-[#4C4D4F80]">Or</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 lg:col-span-1">
              <Label className='ml-3 font-normal' htmlFor="fname">First Name</Label>
              <Input className='bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="fname" placeholder="Jane" />
              <p className="ml-3 text-xs font-semibold text-red-500">Error message</p>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Label className='ml-3 font-normal' htmlFor="lname">Last Name</Label>
              <Input className='bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="lname" placeholder="Doe" />
              <p className="ml-3 text-xs font-semibold text-red-500">Error message</p>
            </div>
            <div className="col-span-2">
              <Label className='ml-3 font-normal' htmlFor="email">Email</Label>
              <Input className='bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="dob" placeholder="jane@diu.com" />
              <p className="ml-3 text-xs font-semibold text-red-500">Error message</p>
            </div>
            <div className="col-span-2">
              <Label className='ml-3 font-normal' htmlFor="email">Password</Label>
              <Input className='bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="password" id="dob" placeholder="*******" />
              <p className="ml-3 text-xs font-semibold text-red-500">Error message</p>
            </div>
            <div className="flex items-center col-span-2 mt-2 mb-4 space-x-2">
              <Checkbox id="newsletter" />
              <label
                htmlFor="newsletter"
                className="text-sm text-[#4C4D4F] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subscribe to our monthly newsletter
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center w-full gap-2">
            <p className="text-xs text-[#4C4D4F80] mb-2">
              By clicking below you agree to our{" "}
              <Link className="text-xs text-[#4C4D4F] underline" href="#">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="text-xs text-[#4C4D4F] underline" href="#">
                Privacy Policy
              </Link>
            </p>
            <Button
              className="w-full py-6 rounded-full"
              onClick={() => router("/")}
            >
              Sign up
            </Button>

            <p className="text-xs text-[#4C4D4F80] ">
              Already have an account?
              <Link
                className="text-xs text-[#4C4D4F] underline"
                href="/register"
              >
                Log in
              </Link>
            </p>
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
