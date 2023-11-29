import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Logo from "@/assets/logo.png";
import Image from "@/lib/Image";
import ItemsGrid from "@/components/AdminPanel/ItemsGrid";
import AfterCareItem from "@/components/AdminPanel/AfterCareItem";

export function ConsentFormPDFView() {
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
                <AfterCareItem />
                <AfterCareItem />
                <AfterCareItem />
                <AfterCareItem />
                <AfterCareItem />
                <AfterCareItem />
                <AfterCareItem />
                <AfterCareItem />
            </div>
            <DialogFooter>
                <Button type="submit">Done</Button>
            </DialogFooter>
        </>

    );
}