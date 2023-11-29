"use client";;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PenLineIcon } from "lucide-react";


type Props = {}

export default function MedicationHistory({ }: Props) {
    return (
        <>
            <div className="flex justify-between">
                <p>Medications History</p>
                <p className="p-2 bg-gray-100/50 rounded-xl">
                    <PenLineIcon />
                </p>
            </div>
            <Separator className="my-4" />
                <Table>
                    <TableHeader>
                        <TableRow className="border-none">
                            <TableHead>Long Term Medications</TableHead>
                            <TableHead>Short Term Medications</TableHead>
                            <TableHead>Botox and Profihilo Injections</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <span>1. Paracetamol</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                            <TableCell>
                                <span>1. Amoxicillin</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span>1. Paracetamol</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                            <TableCell>
                                <span>1. Amoxicillin</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span>1. Paracetamol</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                            <TableCell>
                                <span>1. Amoxicillin</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span>1. Paracetamol</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                            <TableCell>
                                <span>1. Amoxicillin</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span>1. Paracetamol</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                            <TableCell>
                                <span>1. Amoxicillin</span>
                                <span className="ml-4 text-foreground/50">250mg</span>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
        </>
    )
}