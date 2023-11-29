import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import ConsentArchive from "./Modal/ConsentArchive";
import PageModal from "./Modal/PageModal";
import ConsentFormInput from "./Modal/ConsentFormInput";
import UploadTreatmentProfile from "./Modal/UploadTreatmentProfile";
import TreatmentProfile from "./Modal/TreatmentProfile";

export function ConsentFormModal({ BText }: { BText: string }) {
    const [modalPage, setModalPage] = useState("archive" || "consent-form");
    const [currentPageNum, setCurrentPageNum] = useState(1);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <p className="cursor-pointer">{BText}</p>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-scroll border-none lg:max-w-screen-lg">
                {
                    modalPage == "archive" ? (
                        <ConsentArchive modalPage={modalPage} setModalPage={setModalPage} />
                    ) : modalPage == "consent-form" ? (
                        <ConsentFormInput currentPageNum={currentPageNum} setCurrentPageNum={setCurrentPageNum} modalPage={modalPage} setModalPage={setModalPage} />
                    ) : (
                        <PageModal currentPageNum={currentPageNum} setCurrentPageNum={setCurrentPageNum} modalPage={modalPage} setModalPage={setModalPage} />
                    )
                }

            </DialogContent>
        </Dialog>
    );
}