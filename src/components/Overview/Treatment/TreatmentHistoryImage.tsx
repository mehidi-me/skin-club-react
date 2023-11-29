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
import { ExternalLinkIcon } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Image from "@/lib/Image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TreatmentProfile from "../Overview2/Modal/TreatmentProfile";

const data: Payment[] = [
  {
    id: "1",
    treatment: "PRP Injections",
    thumbnail: "https://i.ibb.co/Yd0N3Dq/treatment.webp",
    procedure_notes: "View Notes",
    date: "25/08/23",
    time: "09:00am",
    doctor: "Dr. Irfan Ahmad",
    studio: "Toorak",
    payment: "Pending",
  },
  {
    id: "2",
    treatment: "PRP Injections",
    thumbnail: "https://i.ibb.co/VTmBFyX/image-4.png",
    procedure_notes: "View Notes",
    date: "25/08/23",
    time: "09:00am",
    doctor: "Vihang Sharma",
    studio: "Toorak",
    payment: "Pending",
  },
  {
    id: "3",
    treatment: "PRP Injections",
    thumbnail: "https://i.ibb.co/VTmBFyX/image-4.png",
    procedure_notes: "View Notes",
    date: "25/08/23",
    time: "09:00am",
    doctor: "Vihang Sharma",
    studio: "Toorak",
    payment: "Pending",
  },
];

export type Payment = {
  id: string;
  treatment: string;
  thumbnail: string;
  procedure_notes: string;
  date: string;
  time: string;
  doctor: string;
  studio: string;
  payment: string;
};

export default function TreatmentHistoryImage({
  TreatmentHistoryData,
  setCurrentDetails,
}: {
  TreatmentHistoryData: any;
  setCurrentDetails: any;
}) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "treatment",
      header: "Treatment",
      cell: ({ row }) => (
        <div className="w-full ">{row.getValue("treatment")}</div>
      ),
    },
    {
      accessorKey: "thumbnail",
      header: "Thumbnail",
      cell: ({ row }) => (
        <div
          className="w-full cursor-pointer"
          onClick={() => {
            setCurrentDetails({
              thumbnail: row.getValue("thumbnail"),
              doctor: row.getValue("doctor"),
            });
            //  console.log(row);
          }}
        >
          <Image
            src={row.getValue("thumbnail")}
            width={100}
            height={40}
            alt="Thumbnail"
          />
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => <div className="w-full ">{row.getValue("date")}</div>,
    },
    {
      accessorKey: "time",
      header: "Time",
      cell: ({ row }) => <div className="w-full ">{row.getValue("time")}</div>,
    },
    {
      accessorKey: "doctor",
      header: "Doctor",
      cell: ({ row }) => (
        <div className="w-full ">{row.getValue("doctor")}</div>
      ),
    },
    {
      accessorKey: "studio",
      header: "Studio",
      cell: ({ row }) => <div>{row.getValue("studio")}</div>,
    },
    {
      accessorKey: "payment",
      header: "Payment",
      cell: ({ row }) => (
        <div className="flex items-center justify-start w-full">
          <p className="px-2 pb-1 text-xs text-white bg-green-500 rounded-full">
            {row.getValue("payment")}
          </p>
        </div>
      ),
    },
    {
      accessorKey: "id",
      header: "Detail",
      cell: ({ row }) => (
        <div className="flex items-center justify-start">
          <div className="p-1 py-2 bg-gray-100 rounded-full">
            <Dialog>
              <DialogTrigger asChild>
                <ExternalLinkIcon className="h-4" />
              </DialogTrigger>
              <DialogContent className="max-h-screen overflow-y-scroll border-none lg:max-w-screen-lg">
                <TreatmentProfile />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ),
    },
  ];
  const table = useReactTable({
    data: TreatmentHistoryData,
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
    <>
      <div className="bg-white lg:p-4 lg:pb-6">
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
          <Table className="overflow-hidden border-none">
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
        </Card>
      </div>
    </>
  );
}
