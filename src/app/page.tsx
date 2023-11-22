import Categories from "@/components/categories";
import Topbar from "@/components/topbar";
import DiscoverBar from "@/components/discover_bar";
import { RequestContainer } from "@/components/request";
import DiscoverPlaceRequestBtn from "@/components/request/discover_place_request_btn";
import TopbarLocationFilterWrapper from "@/components/topbar/topbar_location_filter_wrapper";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: Props) {
  const subCategoryId = searchParams.category_group_id;
  const cityId = searchParams.city_id;

  return (
    <main className="w-full">
      <Topbar className="mt-2 md:mt-0" subcategoryid={subCategoryId} />

      {subCategoryId && (
        <TopbarLocationFilterWrapper className="mt-2 md:mt-4" cityid={cityId} />
      )}

      {!subCategoryId && <Categories className="mt-6" />}

      {!subCategoryId && <DiscoverBar />}

      <RequestContainer searchparams={searchParams} />

      <DiscoverPlaceRequestBtn />
    </main>
  );
}
