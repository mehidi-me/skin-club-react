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
import { SearchIcon, SettingsIcon, Tally1, Trash2Icon, TrashIcon, XIcon } from "lucide-react";

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

const data: Payment[] = [
    {
        id: "1",
        treatment: "PRP Injections",
        time: "09:00 - 10:30",
        patient: "Jane Doe",
        practitioner: "Dr. Vihang",
        studio: "Toorak",
        status: "In Progress"
    },
    {
        id: "2",
        treatment: "PRP Injections",
        time: "09:00 - 10:30",
        patient: "Jane Doe",
        practitioner: "Dr. Vihang",
        studio: "Toorak",
        status: "In Progress"
    },
    {
        id: "3",
        treatment: "PRP Injections",
        time: "09:00 - 10:30",
        patient: "Jane Doe",
        practitioner: "Dr. Vihang",
        studio: "Toorak",
        status: "In Progress"
    },
    {
        id: "1",
        treatment: "PRP Injections",
        time: "09:00 - 10:30",
        patient: "Jane Doe",
        practitioner: "Dr. Vihang",
        studio: "Toorak",
        status: "In Progress"
    },
    {
        id: "2",
        treatment: "PRP Injections",
        time: "09:00 - 10:30",
        patient: "Jane Doe",
        practitioner: "Dr. Vihang",
        studio: "Toorak",
        status: "In Progress"
    },
    {
        id: "3",
        treatment: "PRP Injections",
        time: "09:00 - 10:30",
        patient: "Jane Doe",
        practitioner: "Dr. Vihang",
        studio: "Toorak",
        status: "In Progress"
    },
]

export type Payment = {
    id: string,
    treatment: string;
    time: string,
    patient: string,
    practitioner: string,
    studio: string,
    status: string
}

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "treatment",
        header: "Treatment",
        cell: ({ row }) => (
            <div className="min-w-[100px] w-full">
                {row.getValue("treatment")}
            </div>
        ),
    },
    {
        accessorKey: "time",
        header: "Time",
        cell: ({ row }) => (
            <div className="min-w-[100px] w-full">
                {row.getValue("time")}
            </div>
        ),
    },
    {
        accessorKey: "patient",
        header: "Patient",
        cell: ({ row }) => (
            <div className="min-w-[100px] w-full">
                {row.getValue("patient")}
            </div>
        ),
    },
    {
        accessorKey: "practitioner",
        header: "Practitioner",
        cell: ({ row }) => (
            <div>
                {row.getValue("practitioner")}
            </div>
        ),
    },
    {
        accessorKey: "studio",
        header: "Studio",
        cell: ({ row }) => (
            <div>
                {row.getValue("studio")}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="flex items-center justify-start min-w-[100px] w-full">
                <p className="px-2 pb-1 text-xs text-white bg-green-500 rounded-full">{row.getValue("status")}</p>
            </div>
        ),
    }
]

export default function PatientManagement() {
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
            <div className="px-4 bg-white">
                <div className="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row">
                    <p className="text-sm text-foreground">Todays Schedule</p>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex items-center justify-between p-4 py-1 rounded-lg bg-gray-100/50">
                            <Input
                                className="px-0 text-base bg-transparent border-none placeholder:text-foreground/40"
                                placeholder="Search patient"
                                value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                                onChange={(event) => {
                                    table.getColumn("name")?.setFilterValue(event.target.value)
                                    table.getColumn("status")?.setFilterValue(event.target.value)
                                }
                                } />
                            <Tally1 strokeWidth={0.4} />
                            <SearchIcon className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-between p-4 py-1 rounded-lg bg-gray-100/50">
                            <p className="w-14">Select:</p>
                            <Select>
                                <SelectTrigger className="bg-transparent border-none w-28">
                                    <SelectValue placeholder="20 Aug" />
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
                <div className="rounded-md">
                    <Table className="border-none">
                        <TableHeader className="bg-gray-100/50 rounded-xl">
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
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-12 text-center"
                                >
                                    <div className="flex items-center justify-center">
                                        <p className="underline cursor-pointer">View more</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}
