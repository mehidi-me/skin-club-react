"use client";
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ExternalLinkIcon, PenLineIcon, SearchIcon, SettingsIcon, Tally1, Trash2Icon, TrashIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import FaqHeader from "@/components/Faq/FaqHeader"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const data: Payment[] = [
    {
        id: "1",
        treatment: "PRP Injections",
        procedure_notes: "View Notes",
        date: "25/08/23",
        time: "09:00am",
        doctor: "Vihang Sharma",
        studio: "Toorak",
        payment: "Pending"
    },
    {
        id: "2",
        treatment: "PRP Injections",
        procedure_notes: "View Notes",
        date: "25/08/23",
        time: "09:00am",
        doctor: "Vihang Sharma",
        studio: "Toorak",
        payment: "Pending"
    },
    {
        id: "3",
        treatment: "PRP Injections",
        procedure_notes: "View Notes",
        date: "25/08/23",
        time: "09:00am",
        doctor: "Vihang Sharma",
        studio: "Toorak",
        payment: "Pending"
    },
]

export type Payment = {
    id: string,
    treatment: string;
    procedure_notes: string;
    date: string,
    time: string,
    doctor: string,
    studio: string,
    payment: string,
}

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "treatment",
        header: "Treatment",
        cell: ({ row }) => (
            <div className="min-w-[100px] w-ful">
                <p className="text-sm font-thin font-foreground/50">
                    {row.getValue("treatment")}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "procedure_notes",
        header: "Procedure Notes",
        cell: ({ row }) => (
            <div className="min-w-[100px] w-ful">
                <p className="text-sm font-thin font-foreground/50">
                    {row.getValue("procedure_notes")}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => (
            <div className="min-w-[100px] w-ful">
                <p className="text-sm font-thin font-foreground/50">
                    {row.getValue("date")}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "time",
        header: "Time",
        cell: ({ row }) => (
            <div className="min-w-[100px] w-ful">
                <p className="text-sm font-thin font-foreground/50">
                    {row.getValue("time")}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "doctor",
        header: "Doctor",
        cell: ({ row }) => (
            <div className="min-w-[100px] w-ful">
                <p className="text-sm font-thin font-foreground/50">
                    {row.getValue("doctor")}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "studio",
        header: "Studio",
        cell: ({ row }) => (
            <div>
                <p className="text-sm font-thin font-foreground/50">
                    {row.getValue("studio")}
                </p>
            </div>
        ),
    },
    {
        accessorKey: "payment",
        header: "Payment",
        cell: ({ row }) => (
            <div className="flex items-center justify-start min-w-[100px] w-full">
                <p className="px-2 pb-1 text-xs text-white bg-green-500 rounded-full">{row.getValue("payment")}</p>
            </div>
        ),
    },
    {
        accessorKey: "id",
        header: "Detail",
        cell: ({ row }) => (
            <div className="flex items-center justify-start">
                <div className="p-1 py-2 bg-gray-100 rounded-full">
                    <ExternalLinkIcon className="h-4" />
                </div>
            </div>),
    }
]

export default function TreatmentHistoryTable() {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    })

    return (
        <>
            <div className="bg-white lg:px-4">
                <div className="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row">
                    <p className="text-foreground">Treatment History</p>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex items-center justify-between p-4 py-1 rounded-lg bg-gray-100/50">
                            <p className="w-full">Filter By:</p>
                            <Select>
                                <SelectTrigger className="bg-transparent border-none w-28">
                                    <SelectValue placeholder="Upcoming" />
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
                    </div>
                </div>
                <Card className="overflow-hidden rounded-md bg-gray-100/50">
                    <Table className="border-none">
                        <TableHeader className="bg-white rounded-xl">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow className="border-0" key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead className="border-0" key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </>
    )
}
