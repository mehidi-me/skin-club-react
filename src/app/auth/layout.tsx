import { AuthHeader } from "@/components/Common/Header";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex flex-col min-h-screen bg-[#FFF9F1] text-[#4C4D4F]">
            <AuthHeader />
            {children}
        </main>
    )
}
