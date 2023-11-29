"use client";
import FaqHeader from '@/components/Faq/FaqHeader'
import FaqTab from '@/components/Faq/FaqTab'
import AccountSettings from '@/components/Profile/AccountSettings';
import PersonalInformation from '@/components/Profile/PersonalInformation'
import Preference from '@/components/Profile/Preference';
import { useState } from 'react';

type Props = {}

export default function Profile({ }: Props) {
    const [profileContent, setProfileContent] = useState("Personal Information")

    return (
        <div className="flex flex-col w-full gap-10 p-6 rounded-md bg-secondary">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="flex flex-col gap-y-8">
                    <FaqHeader title="Profile Management" text="Manage your profile settings and personal data" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="flex flex-col gap-y-4">
                    <FaqTab
                        profileContent={profileContent}
                        setProfileContent={setProfileContent}
                        tabs={[
                            "Personal Information",
                            "Account Settings",
                            "Preferences"
                        ]} />
                </div>
                <div className="flex flex-col lg:col-span-2 gap-y-8">
                    {
                        profileContent == "Personal Information" ?
                            <PersonalInformation /> :
                            profileContent == "Account Settings" ?
                                <AccountSettings /> :
                                profileContent == "Preferences" ?
                                    <Preference /> : null
                    }
                </div>
            </div>
        </div>
    )
}