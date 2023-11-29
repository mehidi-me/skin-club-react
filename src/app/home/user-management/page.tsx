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
import { SearchIcon, SettingsIcon, Tally1, XIcon } from "lucide-react";

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
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import AddPatientForm from "@/components/PatientManagement/AddPatientForm";

const data: Payment[] = [
    {
        id: "1",
        name: "Jane Doe",
        email: "jane@gmail.com",
        status: "Offline",
        user_role: "Client",
    },
    {
        id: "2",
        name: "Jane Doe",
        email: "jane@gmail.com",
        status: "Offline",
        user_role: "Client",
    },
    {
        id: "3",
        name: "Jane Doe",
        email: "jane@gmail.com",
        status: "Offline",
        user_role: "Client",
    },
    {
        id: "4",
        name: "Jane Doe",
        email: "jane@gmail.com",
        status: "Offline",
        user_role: "Client",
    },
]

export type Payment = {
    id: string,
    name: string;
    email: string,
    status: string;
    user_role: string;
}

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="flex flex-col items-center justify-center gap-2 capitalize">
                <p>{row.getValue("name")}</p>
                <p className="text-xs text-foreground">{row.getValue("email")}</p>
            </div>
        ),
    },
    {
        accessorKey: "email",
        header: "",
        cell: ({ row }) => (null),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <div className="flex justify-center">
            {row.getValue("status")}
        </div>,
    },
    {
        accessorKey: "user_role",
        header: "User Role",
        cell: ({ row }) => <div className="flex items-center justify-center">
            <p className="px-2 pb-1 text-xs text-white bg-green-500 rounded-full">{row.getValue("user_role")}</p>
        </div>,
    },
    {
        accessorKey: "id",
        header: "Action",
        cell: ({ row }) => (
            <div className="flex flex-col items-center justify-center gap-x-4 lg:flex-row">
                <div className="p-1 py-2 bg-gray-100 rounded-full">
                    <SettingsIcon className="h-4" />
                </div>
                <p className="hidden lg:block">Modify Roles {row.getValue("id")}</p>
            </div>
        ),
    },
    {
        accessorKey: "id",
        header: "Remove User",
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
                <div className="p-1 py-2 bg-gray-100 rounded-full">
                    <XIcon className="h-4" />
                </div>
            </div>),
    },
]

export default function UserManagement() {
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
        <div className="flex flex-col w-full gap-10 p-2 rounded-md lg:p-6 bg-secondary">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="flex flex-col gap-y-8">
                    <FaqHeader title="User Management" text="Add or remove users and manage user permissions" />
                </div>
            </div>
            <div className="w-full p-4 bg-white rounded-xl">
                <div className="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row">
                    <p className="text-sm text-foreground">Manage Users</p>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex items-center justify-between p-4 py-1 rounded-lg bg-gray-100/50">
                            <Input
                                className="px-0 text-base bg-transparent border-none placeholder:text-foreground/40"
                                placeholder="Search user"
                                value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                                onChange={(event) => {
                                    table.getColumn("name")?.setFilterValue(event.target.value)
                                    table.getColumn("status")?.setFilterValue(event.target.value)
                                }
                                } />
                            <Tally1 strokeWidth={0.4} />
                            <SearchIcon className="w-4 h-4" />
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="rounded-full" variant="outline">Add User</Button>
                            </DialogTrigger>
                            <DialogContent className="w-full lg:min-w-[700px] overflow-y-scroll">
                                <AddPatientForm />
                                <DialogFooter>
                                    <Button variant="outline" className="rounded-full" type="submit">Cancel</Button>
                                    <Button type="submit" className="rounded-full">Submit</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="rounded-md">
                    <Table className="border-none">
                        <TableHeader className="bg-gray-100/50 rounded-xl">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow className="border-0" key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead className="text-center" key={header.id}>
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
                </div>
            </div>
        </div>
    )
}
