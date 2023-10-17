export async function fetchCities() {
  const res = await fetch("https://www.askcenta.ng/api/cities", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch cities from https://www.askcenta.ng/api/cities"
    );

  return res.json();
}

export async function fetchStates() {
  const res = await fetch("https://askcenta.ng/api/states", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch states from https://askcenta.ng/api/states"
    );

  return res.json();
}
