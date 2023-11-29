"use client";;
import FaqContent from "@/components/Faq/FaqContent";
import FaqHeader from "@/components/Faq/FaqHeader";
import FaqSearch from "@/components/Faq/FaqSearch";
import FaqTab from "@/components/Faq/FaqTab";
import { useState } from "react";

export default function FAQ() {
    const [profileContent, setProfileContent] = useState("General Inquiries")

    return (
        <div className="flex flex-col w-full gap-10 p-6 rounded-md bg-secondary">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="flex flex-col gap-y-8">
                    <FaqHeader title="FAQ's" text="Quick answers to questions you may have." />
                </div>
                <div className="flex flex-col gap-8 lg:col-span-2">
                    <FaqSearch />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="flex flex-col gap-y-4">
                    <FaqTab
                        profileContent={profileContent}
                        setProfileContent={setProfileContent}
                        tabs={[
                            "General Inquiries",
                            "What payment methods do you need?",
                            "What if I have more questions?",
                            "About SKINCLUB site"
                        ]} />
                </div>
                <div className="flex flex-col lg:col-span-2 gap-y-8">
                    <FaqContent />
                </div>
            </div>
        </div>
    )
}
