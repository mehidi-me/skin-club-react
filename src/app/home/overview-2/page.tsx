"use client";;
import Overview2Header from "@/components/Overview/Overview2/Overview2Header";
import AppointmentCard from "@/components/Overview/Overview2/AppointmentCard";
import NotesCard from "@/components/Overview/Overview2/NotesCard";
import TreatmentHistoryTable from "@/components/Overview/Overview2/TreatmentHistoryTable";
import SurgicalHistory from "@/components/Overview/Overview2/SurgicalHistory";
import PaymentCard from "@/components/Overview/Overview2/PaymentCard";
import MedicationHistory from "@/components/Overview/Overview2/MedicationHistory";
import ConsentHistory from "@/components/Overview/Overview2/ConsentHistory";
import BloodPathology from "@/components/Overview/Overview2/BloodPathology";
import ImagingRadiology from "@/components/Overview/Overview2/ImagingRadiology";
import InsuranceBilling from "@/components/Overview/Overview2/InsuranceBilling";
import OverviewFixedRightMenu from "@/components/Overview/Overview2/OverviewFixedRightMenu";

export default function Overview2() {
    return (
        <div className="flex flex-col w-full h-full p-6 px-2 lg:px-6 bg-secondary gap-y-8">
            <Overview2Header />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <AppointmentCard />
                <div className="col-span-1 p-4 bg-white lg:col-span-2 rounded-xl">
                    <NotesCard />
                </div>
                <div className="col-span-1 p-4 bg-white lg:col-span-3 rounded-xl">
                    <TreatmentHistoryTable />
                </div>
                <div className="col-span-1 p-4 bg-white lg:col-span-2 rounded-xl">
                    <SurgicalHistory />
                </div>
                <div className="flex flex-col col-span-1 gap-4 p-4 bg-white rounded-xl">
                    <PaymentCard />
                </div>
                <div className="col-span-1 p-4 bg-white lg:col-span-2 rounded-xl">
                    <MedicationHistory />
                </div>
                <div className="col-span-1 bg-white lg:col-span-2 rounded-xl">
                    <ConsentHistory />
                </div>
                <div className="col-span-1 p-4 bg-white lg:col-span-2 rounded-xl">
                    <BloodPathology />
                </div>
                <div className="col-span-1 p-4 bg-white lg:col-span-2 rounded-xl">
                    <ImagingRadiology />
                </div>
                <div className="col-span-1 p-4 bg-white lg:col-span-2 rounded-xl">
                    <InsuranceBilling />
                </div>
                <OverviewFixedRightMenu/>
            </div>

        </div>
    )
}

