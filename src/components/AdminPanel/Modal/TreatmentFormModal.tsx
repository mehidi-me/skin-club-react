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

export function TreatmentFormModal({ BText }: { BText: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{BText}</Button>
      </DialogTrigger>
      <DialogContent className="border-none">
        <DialogHeader>
          <div className="flex justify-center items-center h-10">
            <Image alt="logo" width={180} src={Logo} />
          </div>
          <DialogTitle className="text-lg font-[700] text-[#343434]">
            Create a section
          </DialogTitle>
          <DialogDescription className="text-[#343434]">
            Add Section Details
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Section name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Total Sections
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Medical details
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Each Section Price
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="name" className="text-[#00000080]">
              Total Price
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Section</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
