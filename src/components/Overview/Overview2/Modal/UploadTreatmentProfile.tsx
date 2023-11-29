import Logo from "@/assets/logo.png";
import treatmentImg from "@/assets/treatment/treatment.png";
import Image from "@/lib/Image";
import { Button } from '@/components/ui/button'
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { SpeechIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

type Props = {
    modalPage: string,
    setModalPage: React.Dispatch<React.SetStateAction<string>>
}

export default function UploadTreatmentProfile({ setModalPage, modalPage }: Props) {

    return (
        <>
            <DialogHeader>
                <div className="flex items-center justify-center h-10">
                    <Image alt="logo" width={180} src={Logo} />
                </div>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center w-full gap-4 justify-items-center">
                <p className='text-2xl'>Upload image for treatment profile </p>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <div className="col-span-2 lg:col-span-1 ">
                        <Image alt="logo" src={treatmentImg} className='w-full h-full' />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex flex-col items-center justify-between gap-4 p-2 border border-gray-800 rounded-lg lg:flex-row">
                            <p>
                                Image of treatment
                            </p>
                            <Button>Upload Image</Button>
                        </div>
                        <div className="flex py-2 gap-x-1">
                            <Image alt="logo" src={treatmentImg} className='w-10 rounded-md' />
                            <Image alt="logo" src={treatmentImg} className='w-10 rounded-md' />
                            <Image alt="logo" src={treatmentImg} className='w-10 rounded-md' />
                            <Image alt="logo" src={treatmentImg} className='w-10 rounded-md' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-medium">Tools</p>
                            <p className="text-xs">Click on image and ad descriptions about tag</p>
                            <p className="text-sm">Tag no : 1</p>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full bg-gray-100/50">
                                        <SelectValue placeholder="Select the part of body" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full bg-gray-100/50">
                                        <SelectValue placeholder="Title" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full bg-gray-100/50">
                                        <SelectValue placeholder="Dosage name/ mls" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="h-20 border rounded-lg bg-gray-100/50">
                                <Input placeholder="Description" className="border-0 bg-gray-100/50"></Input>
                            </div>
                            <div className="flex justify-end w-full">
                                <Button>Add Tag</Button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <Card className="w-full p-4 mb-4 rounded-xl bg-gray-100/50">
                        <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Tag no</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Dosage</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        [1, 2, 3, 4].map(item => (
                                            <TableRow key={item}>
                                                <TableCell className="font-medium">{item}</TableCell>
                                                <TableCell>PHR Injection</TableCell>
                                                <TableCell>100 mls</TableCell>
                                                <TableCell>Lorem ipsum dolor sit amet.....</TableCell>
                                                <TableCell>View</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>

                        </Card>
                        <Textarea className="rounded-xl bg-gray-100/50" placeholder="Add Note" />
                    </div>
                </div>
            </div>
            <DialogFooter>
                <div className='flex flex-col justify-between w-full gap-4 px-8 lg:p-0 lg:flex-row'>
                    <div className="flex gap-3">
                        <SpeechIcon />
                        <p className="underline">Use Text to speech for notes</p>
                    </div>
                    {
                        modalPage == "page-4" ? (
                            <Button onClick={() => setModalPage("upload-profile")} type="submit" className="rounded-xl" size="lg">Submit</Button>
                        ) : modalPage == "upload-profile" ? (
                            <Button onClick={() => setModalPage("treatment-profile")} type="submit" className="rounded-xl" size="lg">Submit</Button>
                        ) : null
                    }
                </div>
            </DialogFooter>
        </>
    )
}