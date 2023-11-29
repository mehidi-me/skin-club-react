"use client";;
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

type Props = {}

export default function ImagingRadiology({ }: Props) {
    return (
        <>
            <p>Imaging & Radiology</p>
            <Separator className="my-4" />
            <div className="flex flex-col py-2 gap-y-10">
                <div className="flex flex-col gap-4">
                    <p>Select Test</p>
                    <div className="flex items-center gap-4">
                        <Select>
                            <SelectTrigger className="w-2/3 bg-gray-100 border-none lg:w-1/3">
                                <SelectValue placeholder="Select Test Or Order" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline">Order Test</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Test Requests</p>
                    <div className="flex items-center gap-4">
                        <Select>
                            <SelectTrigger className="w-2/3 bg-gray-100 border-none">
                                <SelectValue placeholder="Select Test Or Order" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline">View Form</Button>
                    </div>
                    <div className="flex items-center gap-4">
                        <Select>
                            <SelectTrigger className="w-2/3 bg-gray-100 border-none">
                                <SelectValue placeholder="Select Test Or Order" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline">View Form</Button>
                    </div>
                </div>
            </div>
        </>
    )
}