import Categories from "@/components/categories";
import Topbar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import DiscoverBar from "@/components/discover_bar";
import { RequestContainer, RequestForm } from "@/components/request";
import {
  CategoryType,
  CitiesResponseType,
  FeedsResponse,
  StateResponseType,
  SubCategoryResponseType,
} from "../../types";
import { fetchFeed } from "@/api/feeds";
import { fetchCities, fetchStates } from "@/api/location";
import { fetchCategories, fetchSubCategories } from "@/api/categories";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
  const subCategoryId = searchParams.category_group_id;

  const feedres: Promise<FeedsResponse> =
    searchParams && Object.keys(searchParams).length > 0
      ? fetchFeed(searchParams)
      : fetchFeed();
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();
  const categoriesRes: Promise<CategoryType[]> = fetchCategories();
  const subCategoriesRes: Promise<SubCategoryResponseType> =
    fetchSubCategories();

  const [feed, cities, states, categories, subCategories] = await Promise.all([
    feedres,
    citiesRes,
    statesRes,
    categoriesRes,
    subCategoriesRes,
  ]);

  return (
    <main className="w-full">
      <Topbar className="mt-2 md:mt-0" subcategoryid={subCategoryId} />

      {!subCategoryId && <Categories className="mt-2 md:mt-4" />}

      {!subCategoryId && <DiscoverBar />}

      <RequestContainer requests={feed.data} />

      <RequestForm
        citiesdata={cities.data}
        statesdata={states.data}
        categoriesdata={categories}
        subCategoriesdata={subCategories.data}
      >
        <Button className="md:hidden" variant="place_a_request">
          Place a Request
        </Button>
      </RequestForm>
    </main>
  );
}
