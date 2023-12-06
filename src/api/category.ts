export async function fetchCategories() {
  // const res = await fetch("https://askcenta.ng/api/categories", {
  //   method: "OPTIONS",
  //   next: {
  //     revalidate: 3600 * 6,
  //   },
  // });
  // if (!res.ok)
  //   throw new Error(
  //     "failed to fetch categories from https://askcenta.ng/api/categories"
  //   );
  // return res.json();
  return Promise.resolve(categories);
}

export async function fetchSubCategories() {
  // const res = await fetch("https://askcenta.ng/api/categoryGroups", {
  //   method: "OPTIONS",
  //   next: {
  //     revalidate: 3600 * 6,
  //   },
  // });

  // if (!res.ok)
  //   throw new Error(
  //     "failed to fetch categories from https://askcenta.ng/api/categoryGroups"
  //   );

  // return res.json();
  return Promise.resolve(subCategories);
}

const categories = [
  {
    id: "1",
    title: "Products",
  },
  {
    id: "2",
    title: "Services",
  },
  {
    id: "3",
    title: "Social",
  },
  {
    id: "4",
    title: "Accomodation ",
  },
  {
    id: "5",
    title: "Jobs",
  },
  {
    id: "6",
    title: "Missing Item",
  },
];

const subCategories = {
  data: [
    {
      id: 1,
      name: "Fashion",
      category: "Products",
    },
    {
      id: 2,
      name: "Home & Office",
      category: "Products",
    },
    {
      id: 3,
      name: "Industrial ",
      category: "Products",
    },
    {
      id: 4,
      name: "Automobile",
      category: "Products",
    },
    {
      id: 5,
      name: "Electronics",
      category: "Products",
    },
    {
      id: 6,
      name: "Books",
      category: "Products",
    },
    {
      id: 7,
      name: "Kids & Babies Product",
      category: "Products",
    },
    {
      id: 8,
      name: "Phone & Computers",
      category: "Products",
    },
    {
      id: 9,
      name: "Medical",
      category: "Products",
    },
    {
      id: 10,
      name: "Health & Beauty Products",
      category: "Products",
    },
    {
      id: 11,
      name: "Agro ",
      category: "Products",
    },
    {
      id: 12,
      name: "Ict",
      category: "Services",
    },
    {
      id: 13,
      name: "Financial",
      category: "Services",
    },
    {
      id: 14,
      name: "Engineering ",
      category: "Services",
    },
    {
      id: 15,
      name: "Event ",
      category: "Services",
    },
    {
      id: 16,
      name: "Logistics",
      category: "Services",
    },
    {
      id: 17,
      name: "Legal",
      category: "Services",
    },
    {
      id: 18,
      name: "Relationship ",
      category: "Social",
    },
    {
      id: 19,
      name: "Hookup",
      category: "Social",
    },
    {
      id: 20,
      name: "Business Partner",
      category: "Social",
    },
    {
      id: 21,
      name: "Friendship",
      category: "Social",
    },
    {
      id: 22,
      name: "Shop",
      category: "Accomodation ",
    },
    {
      id: 23,
      name: "Land",
      category: "Accomodation ",
    },
    {
      id: 24,
      name: "Office",
      category: "Accomodation ",
    },
    {
      id: 25,
      name: "Residential",
      category: "Accomodation ",
    },
    {
      id: 26,
      name: "Hostel",
      category: "Accomodation ",
    },
    {
      id: 27,
      name: "Ict",
      category: "Jobs",
    },
    {
      id: 28,
      name: "Engineering ",
      category: "Jobs",
    },
    {
      id: 29,
      name: "Art & Beauty",
      category: "Jobs",
    },
    {
      id: 30,
      name: "Marketing & Sales",
      category: "Jobs",
    },
    {
      id: 31,
      name: "Educational",
      category: "Jobs",
    },
    {
      id: 32,
      name: "Menial Job",
      category: "Jobs",
    },
    {
      id: 33,
      name: "Logistics ",
      category: "Jobs",
    },
    {
      id: 34,
      name: "Law",
      category: "Jobs",
    },
    {
      id: 35,
      name: "Health Care",
      category: "Jobs",
    },
    {
      id: 36,
      name: "Cooperate ",
      category: "Jobs",
    },
    {
      id: 37,
      name: "Lost Items",
      category: "Missing Item",
    },
    {
      id: 38,
      name: "Found Items",
      category: "Missing Item",
    },
  ],
};
