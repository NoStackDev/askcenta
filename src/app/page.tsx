import Categories from "@/components/categories";
import Topbar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import DiscoverBar from "@/components/discover_bar";
import { RequestContainer } from "@/components/request";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: Props) {
  const subCategoryId = searchParams.category_group_id;
  return (
    <main className="w-full">
      <Topbar className="mt-2 md:mt-0" subcategoryid={subCategoryId} />

      {!subCategoryId && <Categories className="mt-2 md:mt-4" />}

      {!subCategoryId && <DiscoverBar />}

      <RequestContainer searchparams={searchParams} />

      <Button className="md:hidden" variant="place_a_request">
        Place a Request
      </Button>
    </main>
  );
}
