import React from 'react'

type Props = {}

export default function PaymentCard({ }: Props) {
    return (
        <>
            <p className="text-lg">Payments</p>
            <div className="flex items-center justify-between text-xs text-foreground/50">
                <p>Transaction</p>
                <p>Amount</p>
            </div>
            <div className="flex flex-col justify-between pb-4 border-b">
                <div className="flex items-center justify-between">
                    <p className="text-base">PRP Treatment</p>
                    <p className="text-base">$350.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-foreground/50">14 Aug, 2023</p>
                    <p className="px-4 text-xs text-white uppercase bg-green-500 rounded-full">PAID</p>
                </div>
            </div>
            <div className="flex flex-col justify-between pb-4 border-b">
                <div className="flex items-center justify-between">
                    <p className="text-base">PRP Treatment</p>
                    <p className="text-base">$350.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-foreground/50">14 Aug, 2023</p>
                    <p className="px-4 text-xs text-white uppercase bg-green-500 rounded-full">PAID</p>
                </div>
            </div>
            <div className="flex flex-col justify-between pb-4 border-b">
                <div className="flex items-center justify-between">
                    <p className="text-base">PRP Treatment</p>
                    <p className="text-base">$350.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-foreground/50">14 Aug, 2023</p>
                    <p className="px-4 text-xs text-white uppercase bg-green-500 rounded-full">PAID</p>
                </div>
            </div>
        </>
    )
}