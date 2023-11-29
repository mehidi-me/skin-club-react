import Logo from "@/assets/logo.png";
import treatmentImg from "@/assets/treatment/treatment.png";
import Image from "@/lib/Image";
import { DialogHeader } from '@/components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TreatmentProfile() {

    return (
        <>
            <DialogHeader>
                <div className="flex items-center justify-center h-10">
                    <Image alt="logo" width={180} src={Logo} />
                </div>
            </DialogHeader>

            <div className="flex flex-col items-center justify-center w-full gap-4 justify-items-center">
                <p className='text-2xl'>Treatment profile </p>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <div className="col-span-2 lg:col-span-1 ">
                        <Image alt="logo" src={treatmentImg} className='w-full h-full' />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex flex-col gap-2">
                            <p className="font-medium">Tag details</p>
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
                    </div>
                </div>
            </div>
        </>
    )
}