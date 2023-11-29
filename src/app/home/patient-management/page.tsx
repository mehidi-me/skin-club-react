"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { SearchIcon, Tally1, Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FaqHeader from "@/components/Faq/FaqHeader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import AddPatientForm from "@/components/PatientManagement/AddPatientForm";

const data: Payment[] = [
  {
    id: "1",
    name: "Jane Doe",
    email: "jane@gmail.com",
    medicare_number: "SK1586",
    private_number: "SK1586",
    dob: "Aug 15, 2023",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane@gmail.com",
    medicare_number: "SK1586",
    private_number: "SK1586",
    dob: "Aug 15, 2023",
  },
  {
    id: "3",
    name: "Jane Doe",
    email: "jane@gmail.com",
    medicare_number: "SK1586",
    private_number: "SK1586",
    dob: "Aug 15, 2023",
  },
];

type Payment = {
  id: string;
  name: string;
  email: string;
  medicare_number: string;
  private_number: string;
  dob: string;
};

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
    cell: ({ row }) => null,
  },
  {
    accessorKey: "medicare_number",
    header: "Medicare Number",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        {row.getValue("medicare_number")}
      </div>
    ),
  },
  {
    accessorKey: "private_number",
    header: "Private health number",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        {row.getValue("private_number")}
      </div>
    ),
  },
  {
    accessorKey: "dob",
    header: "DOB",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        {row.getValue("dob")}
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: "Remove Patient",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Trash2Icon className="h-5 text-red-500" />
      </div>
    ),
  },
];

export default function PatientManagement() {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
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
  });

  return (
    <div className="flex flex-col w-full gap-10 p-2 rounded-md lg:p-6 bg-secondary">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-y-8">
          <FaqHeader title="Patient Management" text="Add or remove patient " />
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl">
        <div className="flex flex-col items-center justify-between gap-4 py-4 lg:flex-row">
          <p className="text-sm text-foreground">Manage Patients</p>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex items-center justify-between p-4 py-1 rounded-lg bg-gray-100/50">
              <Input
                className="px-0 text-base bg-transparent border-none placeholder:text-foreground/40"
                placeholder="Search patient"
                value={
                  (table.getColumn("name")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) => {
                  table.getColumn("name")?.setFilterValue(event.target.value);
                  table.getColumn("status")?.setFilterValue(event.target.value);
                }}
              />
              <Tally1 strokeWidth={0.4} />
              <SearchIcon className="w-4 h-4" />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full" variant="outline">
                  Add Patient
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full lg:min-w-[700px] overflow-y-scroll">
                <AddPatientForm />
                <DialogFooter>
                  <Button
                    variant="outline"
                    className="rounded-full  mt-2"
                    type="submit"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="rounded-full mt-2">
                    Submit
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="rounded-md">
          <Table className="border-none ">
            <TableHeader className="bg-gray-100/50 rounded-xl">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow className="border-0" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        className="text-center border-0"
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
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
  );
}
