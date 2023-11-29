"use client";;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ConsentFormModal } from "./ConsentFormModal";

type Props = {}

export default function ConsentHistory({ }: Props) {
    return (
        <>
            <p className="px-4 pt-4">Consent Forms</p>
            <Separator className="my-4" />
            <Card className="overflow-hidden lg:m-4 rounded-xl bg-gray-100/50">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="text-xs">
                                <TableHead>Form Name</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Treatment</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Active</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-xs text-foreground">
                            {
                                [1, 2, 3, 4].map(item => (
                                    <TableRow key={item}>
                                        <TableCell className="">Consent Form</TableCell>
                                        <TableCell>14/08/2023</TableCell>
                                        <TableCell>PRP Injections</TableCell>
                                        <TableCell>
                                            <p className="w-[72px] text-center text-white bg-green-500 rounded-full py-0.5">Complete</p>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <ConsentFormModal BText="View"/>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
            </Card>
        </>
    )
}