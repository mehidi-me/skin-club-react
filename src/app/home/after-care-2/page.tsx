"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "@/lib/Link"

type Props = {}

export default function AfterCare2({ }: Props) {
    return (
        <div className="flex flex-col w-full h-full gap-4 p-6 px-2 lg:px-6 bg-secondary">
            <p className="px-4 text-2xl font-bold">After Care</p>
            <div className="p-4 bg-white rounded-xl">
                <p className="px-4 text-xl">Treatment History</p>
                <Separator className="my-4" />
                <Card className="lg:m-4 rounded-xl bg-gray-100/50">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="text-sm">
                                <TableHead>Surgery Name</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Treatment</TableHead>
                                <TableHead>Doctor name</TableHead>
                                <TableHead>Atter case</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-xs text-foreground">
                            {
                                [1, 2, 3, 4].map(item => (
                                    <TableRow key={item}>
                                        <TableCell className="">Anti wrinkle Section</TableCell>
                                        <TableCell>14/08/2023</TableCell>
                                        <TableCell>PRP Injections</TableCell>
                                        <TableCell>Dr. Hasham Ahmad</TableCell>
                                        <TableCell className="underline" >
                                            <Link href="/after-care/2">View</Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </div>
    )
}