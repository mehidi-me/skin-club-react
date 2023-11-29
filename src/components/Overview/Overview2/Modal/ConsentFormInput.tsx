import AfterCareItem from '@/components/AdminPanel/AfterCareItem'
import patientImg from "@/assets/patient/patient.png"
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import Logo from "@/assets/logo.png";
import Image from "@/lib/Image";
import { Button } from '@/components/ui/button'
import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React, { useEffect, useRef, useState } from 'react'
import AfterCareDetails from '@/app/(home)/after-care/[id]/page';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import TextInput from '@/components/Common/Auth/TextInput';

type Props = {
    modalPage: string,
    setModalPage: React.Dispatch<React.SetStateAction<string>>
    currentPageNum: number,
    setCurrentPageNum: React.Dispatch<React.SetStateAction<number>>
}

export default function ConsentFormInput({ setModalPage, currentPageNum, setCurrentPageNum }: Props) {

    return (
        <>
            <DialogHeader>
                <div className="flex items-center justify-center h-10">
                    <Image alt="logo" width={180} src={Logo} />
                </div>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center w-full gap-4 justify-items-center">
                <p className='text-2xl'>Consent Forms</p>
                <p className='w-full text-xl text-center lg:w-2/3'>
                    If you had read all the Details of Form and agree with term and condition Sign the form and click on submit button
                </p>
                <div className='flex flex-col gap-2'>
                    <p className='text-xs'>Signature</p>
                    <div className='flex flex-col justify-end p-4 border border-gray-700 h-28 rounded-xl w-72'>
                        {/* <div className='w-full border border-gray-400'></div> */}
                        <TextInput
              label=""
              name="text"
              type="text"
              placeholder=""
              error=""
            />
                    </div>
                    <div className='flex items-center justify-center w-full gap-4 mt-4'>
                        <p className='text-xs'>Write name your name or</p>
                        <Button className='rounded-xl'>Upload Signature</Button>
                    </div>
                </div>
            </div>
            <DialogFooter>
                <div className='flex justify-between w-full'>
                    <p className='font-medium'>Page {currentPageNum} of {currentPageNum}</p>
                    <DialogClose>
                        <Button onClick={() => {
                            setCurrentPageNum(1)
                            setModalPage("archive")
                        }} type="submit">Submit</Button>
                    </DialogClose>
                </div>
            </DialogFooter>
        </>
    )
}