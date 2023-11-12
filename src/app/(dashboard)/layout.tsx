import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RequestFormWrapper } from "@/components/request";
import { ResponseFormWrapper } from "@/components/response";
import Sidebar from "@/components/sidebar";
import { SidebarContextProvider } from "@/context/sidebar_context";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarContextProvider>
        <Navbar />
        <Sidebar className="lg:hidden" />

        <div
          className={cn(
            "lg:flex lg:flex-row lg:gap-16 my-0 md:my-10 md:mx-4 lg:mx-[100px] 2xl:mx-auto max-w-7xl"
          )}
        >
          <Sidebar className="hidden lg:flex" />

          {children}
        </div>
      </SidebarContextProvider>

      <RequestFormWrapper>
        <button id="request_form_modal_trigger" className="hidden"></button>
      </RequestFormWrapper>
      <ResponseFormWrapper requestid={"2"}>
        <button id="response_form_modal_trigger" className="hidden"></button>
      </ResponseFormWrapper>

      <Footer />
    </>
  );
}
