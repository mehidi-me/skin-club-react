import { AuthHeader } from "@/components/Common/Header";
import { Button } from "@/components/ui/button";
import Link from "@/lib/Link"

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FFF9F1] text-[#4C4D4F]">
      <AuthHeader />
      <div className="flex flex-col justify-center items-center h-[calc(90vh)] w-[100%]">
        <p className="text-[85px] text-[#4C4D4F]">404</p>
        <p className="text-[#4C4D4F] text-[34px]">Page Not Found</p>
        <p className="text-[#4C4D4F80] text-[14px] ">
          We’re sorry, the page you requested could not be found
        </p>
        <Link href="/">
          <Button className="rounded-full mt-8">
            Let’s Go Bbck To Home Page
          </Button>
        </Link>
      </div>
    </main>
  );
}
