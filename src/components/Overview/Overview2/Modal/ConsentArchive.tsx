import AfterCareItem from '@/components/AdminPanel/AfterCareItem'
import Logo from "@/assets/logo.png";
import Image from "@/lib/Image";
import { Button } from '@/components/ui/button'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

type Props = {
    modalPage: string,
    setModalPage: React.Dispatch<React.SetStateAction<string>>
}

export default function ConsentArchive({ setModalPage, modalPage }: Props) {
    return (
        <>
            <DialogHeader>
                <div className="flex items-center justify-center h-10">
                    <Image alt="logo" width={180} src={Logo} />
                </div>
                <DialogTitle className="text-lg font-[700] text-[#343434]">
                    Choice a Consent Form
                </DialogTitle>
                <DialogDescription className="text-[#343434]">
                    Select a Consent Form for Patient .
                </DialogDescription>
            </DialogHeader>

            <div className="grid justify-center grid-cols-1 mx-8 mx-auto mt-10 mb-5 w-fit 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 justify-items-center gap-y-8 gap-x-8">
                <div onClick={() => setModalPage("page-1")}>
                    <AfterCareItem />
                </div>
                <div onClick={() => setModalPage("page-1")}>
                    <AfterCareItem />
                </div>
                <div onClick={() => setModalPage("page-1")}>
                    <AfterCareItem />
                </div>
                <div onClick={() => setModalPage("page-1")}>
                    <AfterCareItem />
                </div>
            </div >
            <DialogFooter>
                <Button type="submit">Done</Button>
            </DialogFooter>
        </>
    )
}