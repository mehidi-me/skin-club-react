"use client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SendIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "@/lib/Image";
import beforeImg from "@/assets/overview/before.png";
import afterImg from "@/assets/overview/after.png";
import { Button } from "@/components/ui/button";

type Props = {};

export default function NotesCard({ }: Props) {
  return (
    <>
      <p className="text-lg font-bold">Notes</p>
      <Separator className="my-4" />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-4 bg-gray-100/50 rounded-xl">
          <p className="text-foreground/50">
            It is a long established fact that a reader will be distracted by
            the readable content. It is a long established fact that a reader.
          </p>
          <div className="flex flex-wrap justify-center w-full gap-4">
            <Image src={beforeImg} className="h-40" alt="Before" />
            <Image src={afterImg} className="h-40" alt="After" />
          </div>
          <div className="flex items-center justify-between w-full p-2 bg-white border rounded-xl">
            <Input placeholder="Write note..." className="w-full border-0" />
            <div className="flex items-center justify-center w-12 h-full bg-orange-400 rounded-2xl">
              <SendIcon className="w-5 text-white" />
            </div>
          </div>
        </div>
        <div>
          <ScrollArea className="h-[400px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 p-4 bg-gray-100/50 rounded-xl">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Treatment Performed</p>
                  <p className="text-foreground/50">14 Aug, 2023</p>
                </div>
                <Separator />
                <p className="text-foreground">Dr. Vihang Sharma.</p>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">Anesthesia:</p>
                  <p>Isoflurane</p>
                </div>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">MLS Units:</p>
                  <p>100</p>
                </div>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">Dosing:</p>
                  <p>2.5 ml</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-gray-100/50 rounded-xl">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Treatment Performed</p>
                  <p className="text-foreground/50">14 Aug, 2023</p>
                </div>
                <Separator />
                <p className="text-foreground">Dr. Vihang Sharma.</p>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">Anesthesia:</p>
                  <p>Isoflurane</p>
                </div>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">MLS Units:</p>
                  <p>100</p>
                </div>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">Dosing:</p>
                  <p>2.5 ml</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-gray-100/50 rounded-xl">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Treatment Performed</p>
                  <p className="text-foreground/50">14 Aug, 2023</p>
                </div>
                <Separator />
                <p className="text-foreground">Dr. Vihang Sharma.</p>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">Anesthesia:</p>
                  <p>Isoflurane</p>
                </div>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">MLS Units:</p>
                  <p>100</p>
                </div>
                <div className="flex items-center justify-between w-full lg:w-1/2 text-foreground">
                  <p className="text-foreground/50">Dosing:</p>
                  <p>2.5 ml</p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="flex items-center justify-end w-full gap-4 mt-4">
            <Button className="rounded-xl" size="lg" variant="outline">Overview</Button>
            <Button className="rounded-xl" size="lg">Add notes</Button>
          </div>
        </div>
      </div>
    </>
  );
}
