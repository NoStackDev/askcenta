export const fetchUserResponses = async (requestid: string) => {
  const res = await fetch(`https://www.askcenta.ng/api/requests/${requestid}`, {
    method: "OPTIONS",
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok)
    throw new Error(`failed to fetch request id ${requestid} details`);

  return res.json();
};
