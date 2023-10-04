export type FeedsResponse = {
  data: RequestType[];
  links: FeedsLinks;
  meta: FeedsMeta;
};

export type FeedsLinks = {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
};

export type FeedsMeta = {
  current_page: number;
  from: null | number;
  last_page: number;
  links: { url: null | string; label: string; active: boolean }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type RequestType = {
  bookmark: boolean;
  category: string;
  created_at: string;
  description: string;
  id: number;
  image_url: string | null;
  location: string;
  title: string;
  user: string;
  user_id: number;
  num_of_views: number;
  num_of_responses: number;
};

export type RequestDetailType = {
  success: boolean;
  request: RequestType;
  responses: RequestResponsesType[];
};

export type RequestResponsesType = {
  created_at: string;
  description: string;
  id: number;
  image_url: string;
  location: string;
  price: number;
  request_url: string;
  title: string;
  user_id: number;
  user: string;
  visibility: string;
  whatsapp_num: string;
  whatsapp_link: string;
};

export type CityType = {
  id: number;
  city: string;
  state: string;
};

export type CitiesResponseType = {
  data: CityType[];
};

export type StateResponseType = {
  data: {
    id: number;
    name: string;
  }[];
};

export type SubCategoryType = {
  id: number;
  name: string;
  category: string;
};

export type SubCategoryResponseType = {
  data: SubCategoryType[];
};
