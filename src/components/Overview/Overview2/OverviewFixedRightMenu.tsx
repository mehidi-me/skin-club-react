import React, { useState } from 'react'

type Props = {}

export default function OverviewFixedRightMenu({ }: Props) {
    const [show, setShow] = useState(true)
    return (
        <div className="fixed right-0 items-center hidden gap-0 bg-white lg:flex top-1/2 bottom-1/2">
            <div className="p-4 -rotate-90 bg-gray-200 border cursor-pointer -mr-11"  onClick={() => setShow((prevValue) => !prevValue)}>
                Quick Menu Tab
            </div>
            <div className={`flex flex-col justify-between gap-6 p-6 bg-white border h-80 rounded-xl  relative ${!show ? 'hidden overflow-hidden' : ""}`}>
                <p>Surgical History</p>
                <p>Medications History</p>
                <p>Consent Forms</p>
                <p>Blood & Pathology </p>
                <p>Imaging & Radiology</p>
                <p>Insurance & Billing</p>
            </div>
        </div>
    )
}