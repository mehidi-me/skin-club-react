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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/logo.png";
import Image from "@/lib/Image";
import CopyIcon from "@/assets/icons/copy.svg";
import { FileUploader } from "react-drag-drop-files";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function ProductFormModal({ BText }: { BText: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{BText}</Button>
      </DialogTrigger>
      <DialogContent className="border-none">
     
        <ScrollArea className="h-[700px] overflow-x-hidden">
        <DialogHeader>
          <div className="flex justify-center items-center h-10">
            <Image alt="logo" width={180} src={Logo} />
          </div>
          <DialogTitle className="text-lg font-[700] text-[#343434]">
            Add Product
          </DialogTitle>
          <DialogDescription className="text-[#343434]">
            Add Product Details
          </DialogDescription>
        </DialogHeader>
        <FileUploader>
          <div className="w-full h-[230px] border border-dashed rounded-3xl border-[#A3A3A3] bg-[#EEEEEE] flex flex-col justify-center items-center">
            <Image src={CopyIcon} alt="copy icon" />
            <p className="text-[#343434] text-base mt-4">
              Upload/ Drag amd Drop file here
            </p>
          </div>
        </FileUploader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Product name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Product Price
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Product Quantity
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Product Description
            </Label>
            <Textarea />
          </div>
        </div>
        </ScrollArea>
      
        <DialogFooter>
          <Button type="submit">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
