"use client";
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarItem } from "./SidebarItem"
import { SingleAccordion } from "./SingleAccordion"

type Props = {
    openedMenu: boolean
}


export function Sidebar({ openedMenu }: Props) {

    return (
        <ScrollArea className={`transition-all duration-500 h-full px-6 lg:flex w-full ${openedMenu ? "w-full px-6" : "w-[0] p-0 lg:px-6 lg:w-[280px]"}`}>
            <div className="flex flex-col w-full font-light">
                <SingleAccordion text="Overview" links={
                    [
                        {
                            link: "/overview-1",
                            text: "Overview 1",
                        },
                        {
                            link: "/overview-2",
                            text: "Overview 2",
                        },
                        {
                            link: "/overview-3",
                            text: "Overview 3",
                        }
                    ]
                } />
                <SingleAccordion text="Auth" links={
                    [
                        {
                            link: "/login",
                            text: "Login",
                        },
                        {
                            link: "/register",
                            text: "Register",
                        },
                        {
                            link: "/reset-password",
                            text: "Reset Password",
                        },
                        {
                            link: "/forgot-password",
                            text: "Forgot Password",
                        }
                    ]
                } />
                <SingleAccordion text="Support" links={
                    [
                        {
                            link: "/faq",
                            text: "FAQ's"
                        },
                        {
                            link: "/live-chat",
                            text: "Support Chat",
                        }
                    ]
                } />
                <SingleAccordion text="Aftercare" links={
                    [
                        {
                            link: "/after-care",
                            text: "After Care PDF",
                        },
                        {
                            link: "/after-care-2",
                            text: "After Care Table",
                        },
                    ]
                } />
                <SingleAccordion
                    text="Admin"
                    links={[
                        {
                            link: "/admin/after-care-form",
                            text: "After Care",
                        },
                        {
                            link: "/admin/products",
                            text: "Products",
                        },
                        {
                            link: "/admin/treatments",
                            text: "Treatments",
                        },
                    ]}
                />
                <SidebarItem link="/message" text="Messages" />
                <SidebarItem link="/profile" text="Profile" />
                <SidebarItem link="/user-management" text="User Management" />
                <SidebarItem link="/patient-management" text="Patient Management" />
            </div>

        </ScrollArea>
    )
}