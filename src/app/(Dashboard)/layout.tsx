import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RequestFormWrapper } from "@/components/request";
import Sidebar from "@/components/sidebar";
import { RequestContextProvider } from "@/context/request_context";
import { SidebarContextProvider } from "@/context/sidebar_context";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  const showNavbar = !Boolean(pathname === "/login" || pathname === "/signup");

  return (
    <>
      <RequestContextProvider>
        <SidebarContextProvider>
          <Navbar />
          <Sidebar className="lg:hidden" />

          <div
            className={cn(
              showNavbar &&
                "lg:flex lg:flex-row lg:gap-16 my-0 md:my-10 md:mx-4 lg:mx-[100px] 2xl:mx-auto max-w-7xl"
            )}
          >
            {showNavbar && <Sidebar className="hidden lg:flex" />}
            {children}
          </div>
        </SidebarContextProvider>
        <RequestFormWrapper>
          <button id="request_form_modal_trigger" className="hidden"></button>
        </RequestFormWrapper>
      </RequestContextProvider>

      <Footer />
    </>
  );
}
