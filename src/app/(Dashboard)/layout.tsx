import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SidebarContextProvider } from "@/context/sidebar_context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarContextProvider>
        <Navbar />
        {children}
      </SidebarContextProvider>

      <Footer />
    </>
  );
}
