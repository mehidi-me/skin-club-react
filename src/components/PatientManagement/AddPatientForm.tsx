"use client";;
import logoImg from "@/assets/logo.png"
import patientImg from "@/assets/patient/patient.png"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Image from "@/lib/Image";
import Link from "@/lib/Link"
import { ScrollArea } from "../ui/scroll-area";
import { Checkbox } from "../ui/checkbox";

type Props = {}

export default function AddPatientForm({ }: Props) {
    return (
        <ScrollArea className="h-[700px] overflow-x-hidden">
            <div className='flex flex-col items-center gap-4 mb-4 ml-2'>
                <Link href="/">
                    <Image src={logoImg} alt="Logo" width={136} height={24} />
                </Link>
                <p className='text-3xl'>Patients Management</p>
                <p className='text-lg'>Add Patient details</p>
            </div>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                <div className='flex flex-col w-full'>
                    <Label className='ml-3 font-normal' htmlFor="fname">First Name</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="fname" placeholder="Jane" />
                </div>
                <div className='flex flex-col w-full'>
                    <Label className='ml-3 font-normal' htmlFor="lname">Last Name</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="lname" placeholder="Doe" />
                </div>
                <div className='flex flex-col w-full'>
                    <Label className='ml-3 font-normal' htmlFor="country">Country</Label>
                    <Select>
                        <SelectTrigger className="border-0 border-b">
                            <SelectValue placeholder="United States" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
                <div className='flex flex-col w-full'>
                    <Label className='ml-3 font-normal' htmlFor="country">City</Label>
                    <Select>
                        <SelectTrigger className="border-0 border-b">
                            <SelectValue placeholder="New York" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
                <div className='lg:col-span-2'>
                    <Label className='ml-3 font-normal' htmlFor="address">Address</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="address" placeholder="175 Street Town" />
                </div>
                <div className='lg:col-span-2'>
                    <Label className='ml-3 font-normal' htmlFor="dob">DOB</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="dob" placeholder="Aug 24,1985" />
                </div>
                <div className='lg:col-span-2'>
                    <Label className='ml-3 font-normal' htmlFor="phone">Phone Number</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="number" id="phone" placeholder="232-850-4511" />
                </div>
                <div className='ml-3 lg:col-span-2'>
                    <p className='text-sm'>Medical Information</p>
                </div>
                <div className='lg:col-span-2'>
                    <Label className='ml-3 font-normal' htmlFor="past-medical">Past medical history</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="past-medical" placeholder="Type here" />
                </div>
                <div className='lg:col-span-2'>
                    <Label className='ml-3 font-normal' htmlFor="card-number">Past surgical history</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="card-number" placeholder="type here" />
                </div>
                <div>
                    <Label className='ml-3 font-normal' htmlFor="expire-date">Medications</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="expire-date" placeholder="type here" />
                </div>
                <div>
                    <Label className='ml-3 font-normal' htmlFor="cvc">Supplements</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="cvc" placeholder="type here" />
                </div>
                <div className="flex items-center w-full lg:col-span-2 gap-x-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Smoking
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Drinking
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Recreational
                        </label>
                    </div>
                </div>
                <div className="flex items-center w-full lg:col-span-2 gap-x-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            By Clicking on ‘ Check Box’ I agree with the Terms and conditions of the Company.
                        </label>
                    </div>
                </div>
                <div className="flex flex-col font-medium lg:col-span-2 gap-y-2">
                    <p>Generals Side effects caused by skin care treatment</p>
                    <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum veniam delectus facilis eaque impedit amet sed iusto magnam distinctio fugiat, repellendus, itaque provident, maxime repudiandae ullam beatae. Illum, ex officiis!</p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:col-span-2 lg:grid-cols-2">
                    <Image src={patientImg} alt="Logo" className="w-full" />
                    <Image src={patientImg} alt="Logo" className="w-full" />
                    <Image src={patientImg} alt="Logo" className="w-full" />
                    <Image src={patientImg} alt="Logo" className="w-full" />
                    <Image src={patientImg} alt="Logo" className="w-full" />
                    <Image src={patientImg} alt="Logo" className="w-full" />
                </div>
                <div className="flex items-center w-full lg:col-span-2 gap-x-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            By Clicking on ‘ Check Box’ I agree with the Terms and conditions of the Company.
                        </label>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}