export async function fetchFeed(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  if (searchParams) {
    const params = Object.keys(searchParams).reduce(
      (previousValue, currentValue) => {
        return (previousValue += `${currentValue}=${searchParams[currentValue]}&`);
      },
      ""
    );

    const res = await fetch(
      `https://www.askcenta.ng/api/feeds?${params.slice(0, params.length - 1)}`,
      {
        method: "OPTIONS",
        next: {
          revalidate: 0,
        },
      }
    );

    if (!res.ok) throw new Error("failed to fetch feeds");

    return res.json();
  }

  const res = await fetch("https://www.askcenta.ng/api/feeds", {
    method: "OPTIONS",
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) throw new Error("failed to fetch feeds");

  return res.json();
}
