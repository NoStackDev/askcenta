import Categories from "@/components/categories";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <main className="w-full">
      <Topbar className="mt-2 md:mt-0" />
      <Categories className="mt-2 md:mt-4" />
    </main>
  );
}
