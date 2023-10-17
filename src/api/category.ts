export async function fetchCategories() {
  const res = await fetch("https://askcenta.ng/api/categories", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch categories from https://askcenta.ng/api/categories"
    );

  return res.json();
}

export async function fetchSubCategories() {
  const res = await fetch("https://askcenta.ng/api/categoryGroups", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch categories from https://askcenta.ng/api/categoryGroups"
    );

  return res.json();
}
