import patientImg from "@/assets/patient/patient.png"
import { pdfjs } from "react-pdf";
import "./style.css"
import { Document, Page } from "react-pdf";
import Logo from "@/assets/logo.png";
import Image from "@/lib/Image";
import { Button } from '@/components/ui/button'
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import React, { useEffect, useRef, useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

type Props = {
    modalPage: string,
    setModalPage: React.Dispatch<React.SetStateAction<string>>
    currentPageNum: number,
    setCurrentPageNum: React.Dispatch<React.SetStateAction<number>>
}

export default function PageModal({ setModalPage, currentPageNum, setCurrentPageNum }: Props) {
    const [pdfPages, setPdfPages] = useState(0);
    const [initialWidth, setInitialWidth] = useState(0);
    const pdfWrapper = useRef(null);

    const setPdfSize = () => {
        if (pdfWrapper && pdfWrapper.current) {
            // @ts-ignore
            setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
        }
    };

    const handleResize = () => {
        setPdfSize();
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        setPdfSize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const onDocumentLoad = (v: any) => {
        console.log(v);
        setPdfPages(v.numPages);
    };

    return (
        <>
            <DialogHeader>
                <div className="flex items-center justify-center h-10">
                    <Image alt="logo" width={180} src={Logo} />
                </div>
            </DialogHeader>

            <div className="flex flex-col w-full mt-10 mb-5 lg:p-0 justify-items-center gap-y-8 gap-x-8">
                <div className="w-full max-h-screen overflow-y-hidden" ref={pdfWrapper}>
                    <Document file="/skin-club-react/test_pdf.pdf" onLoadSuccess={onDocumentLoad}>
                        <Page renderAnnotationLayer={false} pageNumber={currentPageNum} width={initialWidth}></Page>
                    </Document>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        I agree with the Terms and conditions.
                    </label>
                </div>

            </div>
            <DialogFooter>
                <div className='flex justify-between w-full'>
                    <p className='font-medium'>Page {currentPageNum} of {pdfPages + 1}</p>
                    {
                        currentPageNum == pdfPages ? (
                            <Button onClick={() => {
                                setCurrentPageNum(prevValue => prevValue + 1)
                                setModalPage("consent-form")
                            }} type="submit">Next</Button>
                        ) : (
                            <Button onClick={() => setCurrentPageNum(prevValue => prevValue + 1)} type="submit">Next</Button>
                        )
                    }
                </div>
            </DialogFooter >
        </>
    )
}