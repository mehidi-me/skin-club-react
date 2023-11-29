import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {}

export default function PersonalInformation({ }: Props) {
    return (
        <div className='flex flex-col gap-6 p-4 bg-white rounded-xl'>
            <div className='flex flex-col gap-2 ml-2'>
                <p className='text-3xl'>Personal Information</p>
                <p className='text-sm'>Update your personal information</p>
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
                <div>
                    <Label className='ml-3 font-normal' htmlFor="pcode">Postal Code</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="pcode" placeholder="98300" />
                </div>
                <div>
                    <Label className='ml-3 font-normal' htmlFor="phone">Phone Number</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="number" id="phone" placeholder="232-850-4511" />
                </div>
                <div className='lg:col-span-2'>
                    <Label className='ml-3 font-normal' htmlFor="address">Address</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="address" placeholder="175 Street Town" />
                </div>
                <div className='ml-3 lg:col-span-2'>
                    <p className='text-sm'>Payment Information</p>
                </div>
                <div className='lg:col-span-2'>
                    <Label className='ml-3 font-normal' htmlFor="card-holder">Card Holder*</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="card-holder" placeholder="Jane Doe" />
                </div>
                <div className='lg:col-span-2'>
                    <Label className='ml-3 font-normal' htmlFor="card-number">Credit/Debit Card Number*</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="card-number" placeholder="4224 4224 4224 4224" />
                </div>
                <div>
                    <Label className='ml-3 font-normal' htmlFor="expire-date">Expiration Month & Year*</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="expire-date" placeholder="05/2027" />
                </div>
                <div>
                    <Label className='ml-3 font-normal' htmlFor="cvc">CVC*</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="text" id="cvc" placeholder="737" />
                </div>
            </div>
            <div className='flex items-center justify-between mt-8'>
                <Button size="lg" className='rounded-full' variant="outline">Cancel</Button>
                <Button size="lg" className='rounded-full'>Save Changes</Button>

            </div>
        </div>
    )
}