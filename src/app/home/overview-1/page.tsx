
import OverViewHeader from "@/components/Overview/OverViewHeader";
import OverviewBanner from "@/components/Overview/OverviewBanner";
import OverviewCard from "@/components/Overview/OverviewCard";
import OverviewRecords from "@/components/Overview/OverviewRecords";
import Treatment from "@/components/Overview/Treatment/Treatment";
import TreatmentHistoryImage from "@/components/Overview/Treatment/TreatmentHistoryImage";
import { ArrowUpRightIcon, PenLineIcon } from "lucide-react";

import {
  OngoinTreatment,
  UpcommingAppointment,
  RecentPayment,
} from "@/api/overviewPageData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const TreatmentHistoryData: Payment[] = [
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

export default function Overview() {
  const [currentDetails, setCurrentDetails] = useState(TreatmentHistoryData[0]);
  return (
    <div className="flex flex-col w-full h-full p-6 px-2 lg:px-6 bg-secondary gap-y-8">
      <OverViewHeader />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <OverviewCard
          bg="bg-[#E1D0C1]"
          subtitle="Ongoing Treatment"
          title={OngoinTreatment.name}
          text={
            <>
              <span className="text-foreground/50">Start Date: </span>
              <span>{OngoinTreatment.date}</span>
            </>
          }
          footer={
            <>
              <div className="flex items-center justify-between">
                <p className="text-sm">Progress</p>
                <p className="text-sm">{OngoinTreatment.progress}%</p>
              </div>
              <div className="relative">
                <div className="absolute w-full h-0.5 bg-black/30"></div>

                <div
                  className="absolute  h-0.5 bg-black/70"
                  style={{ width: `${OngoinTreatment.progress}%` }}
                ></div>
              </div>
            </>
          }
        />
        <OverviewCard
          icon={<PenLineIcon className="w-4 h-4" />}
          bg="bg-[#C2D5DC]"
          subtitle="Upcoming Appointment"
          title={UpcommingAppointment.date}
          text={
            <>
              <span className="text-foreground/50">At: </span>
              <span>{UpcommingAppointment.time}</span>
            </>
          }
          footer={
            <>
              <div>
                <span className="text-foreground/50">Provider: </span>
                <span>{UpcommingAppointment.provider}</span>
              </div>
              <div>
                <span className="text-foreground/50">Studio: </span>
                <span>{UpcommingAppointment.studio}</span>
              </div>
            </>
          }
        />
        <OverviewCard
          icon={<ArrowUpRightIcon className="w-6 h-6" />}
          bg="bg-white"
          subtitle="Recent Payment"
          title={RecentPayment.amount}
          text={
            <>
              <span className="text-foreground/50">Paid via: </span>
              <span>{RecentPayment.paid_via}</span>
            </>
          }
          footer={
            <>
              <div>
                <span className="text-foreground/50">Date: </span>
                <span>{RecentPayment.date}</span>
              </div>
              <div>
                <span className="text-foreground/50">
                  For PRP Injections scheduled session{" "}
                </span>
                <a className="underline" href="#">
                  View Detail
                </a>
              </div>
            </>
          }
        />
      </div>
      <Carousel showArrows={false} showStatus={false} autoPlay>
        <OverviewBanner />
        <OverviewBanner />
        <OverviewBanner />
      </Carousel>
      <OverviewRecords currentDetails={currentDetails} />
      <TreatmentHistoryImage
        setCurrentDetails={setCurrentDetails}
        TreatmentHistoryData={TreatmentHistoryData}
      />
      <Treatment />
    </div>
  );
}
