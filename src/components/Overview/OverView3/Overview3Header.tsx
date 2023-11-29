import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon, SortDescIcon } from 'lucide-react'
import React from 'react'

type Props = {}

export default function Overview3Header({ }: Props) {
    return (
        <div className="flex flex-col items-start justify-between w-full md:flex-row gap-y-4">
            <div className="flex flex-col gap-y-4">
                <h2 className="text-3xl">Welcome, Dr. Vihang</h2>
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                    <p>Check the latest updates on your account</p>
                </div>
            </div>
            <div className="items-center hidden lg:flex gap-x-4">
                <Button variant={"outline"} className="px-2 border rounded-lg">
                    <SortDescIcon className="h-4" />
                </Button>
                <div className="items-center justify-between hidden px-2 py-0 bg-white border-none rounded-full lg:flex ">
                    <Input type="text" placeholder="Search" className="text-base border-none rounded-full" />
                    <SearchIcon className="w-5" />
                </div>
            </div>
        </div>
    )
}