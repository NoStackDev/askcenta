import Categories from "@/components/categories";
import Topbar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import DiscoverBar from "@/components/discover_bar";
import { RequestContainer } from "@/components/request";

export default function Home() {
  return (
    <main className="w-full">
      <Topbar className="mt-2 md:mt-0" />

      <Categories className="mt-2 md:mt-4" />

      <DiscoverBar />

      <RequestContainer />

      <Button className="md:hidden" variant="place_a_request">
        Place a Request
      </Button>
    </main>
  );
}
