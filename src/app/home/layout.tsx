
import { Header } from "@/components/Common/Header";
import { Sidebar } from "@/components/Common/Sidebar";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [openedMenu, setOpenedMenu] = useState(false);

  useEffect(() => {
    setOpenedMenu(false);
  }, [location]);

  return (
    <>
      <Header openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />
      <div className="flex w-full h-full">
        <Sidebar openedMenu={openedMenu} />
        <div
          className={`transition-all duration-500 ${
            openedMenu ? "w-0" : "w-full"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
