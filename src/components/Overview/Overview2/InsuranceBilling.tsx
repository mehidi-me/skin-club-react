"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

type Props = {};


const InsuranceForm = () => {
  return (
    <>
    <div className="grid gap-6 px-4 lg:grid-cols-2">
          <div>
            <Label className="ml-3 font-normal" htmlFor="fname">
              First Name
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="fname"
              placeholder="Jane"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="lname">
              Last Name
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="lname"
              placeholder="Doe"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="dob">
              Date of Birth
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="dob"
              placeholder="03/02/1999"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="insurance">
              Insurance Company
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="insurance"
              placeholder="Hero"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="policy-num">
              Insurance Policy Number
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="policy-num"
              placeholder="666555SA"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="group-num">
              Insurance Group Number
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="group-num"
              placeholder="Group Number"
            />
          </div>
        </div>
        <div className="flex items-center justify-end px-4 gap-x-4">
          <Button className="rounded-xl" size="lg" variant="outline">
            Check Insurance
          </Button>
          <Button className="rounded-xl" size="lg">
            Submit
          </Button>
        </div>
        </>
  )
}
const BillingsForm = () => {
  return (
    <>
    <div className="grid gap-6 px-4 lg:grid-cols-2">
          <div>
            <Label className="ml-3 font-normal" htmlFor="fname">
              Bill Name
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="fname"
              placeholder="Jane"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="lname">
             Bill Last Name
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="lname"
              placeholder="Doe"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="dob">
              Date of Birth
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="dob"
              placeholder="03/02/1999"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="insurance">
              Insurance Company
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="insurance"
              placeholder="Hero"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="policy-num">
              Insurance Policy Number
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="policy-num"
              placeholder="666555SA"
            />
          </div>
          <div>
            <Label className="ml-3 font-normal" htmlFor="group-num">
              Insurance Group Number
            </Label>
            <Input
              className="bg-transparent border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none"
              type="text"
              id="group-num"
              placeholder="Group Number"
            />
          </div>
        </div>
        <div className="flex items-center justify-end px-4 gap-x-4">
          <Button className="rounded-xl" size="lg" variant="outline">
            Check Insurance
          </Button>
          <Button className="rounded-xl" size="lg">
            Submit
          </Button>
        </div>
        </>
  )
}

export default function InsuranceBilling({}: Props) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <p>{activeTab === 1 ? "Insurance & Billing" : "Medicare Billings"}</p>
      <Separator className="my-4" />
      <Card className="flex flex-col gap-8 pb-6 overflow-hidden font-normal bg-gray-100/50 rounded-xl text-foreground">
        <div className="flex items-center w-full mb-4 bg-white border-none">
          <p
            onClick={() => setActiveTab(1)}
            className={
              activeTab === 1
                ? "cursor-pointer h-full px-6 py-4 font-thin border-b-2 border-black text-md bg-secondary"
                : "cursor-pointer h-full px-6 py-4 font-thin text-md"
            }
          >
            Insurance
          </p>
          <p
            onClick={() => setActiveTab(2)}
            className={
              activeTab !== 1
                ? "cursor-pointer h-full px-6 py-4 font-thin border-b-2 border-black text-md bg-secondary"
                : "cursor-pointer h-full px-6 py-4 font-thin text-md"
            }
          >
            Medicare Billings
          </p>
        </div>
        {
          activeTab === 1 ? <InsuranceForm /> : <BillingsForm/>
        }
      </Card>
    </>
  );
}
