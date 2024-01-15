import { RequestFormWrapper } from "@/components/request";
import Sidebar from "@/components/sidebar";
import { RequestContextProvider } from "@/context/request_context";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RequestContextProvider>
        <Sidebar className="lg:hidden" />

        <div
          className={cn(
            "lg:flex lg:flex-row lg:gap-16 my-0 md:my-10 md:mx-4 lg:mx-[100px] 2xl:mx-auto max-w-7xl"
          )}
        >
          <Sidebar className="hidden lg:flex" />
          {children}
        </div>
        <RequestFormWrapper>
          <button id="request_form_modal_trigger" className="hidden"></button>
        </RequestFormWrapper>
      </RequestContextProvider>
    </>
  );
}
