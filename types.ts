import { NextMiddleware } from "next/server";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

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
  show_profile: boolean;
  user_profile_image_url: string | null;
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
  user_profile_image_url: string | null;
  visibility: "public" | "private";
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

export type CategoryType = {
  id: string;
  title: string;
};

export type SubCategoryType = {
  id: number;
  name: string;
  category: string;
};

export type SubCategoryResponseType = {
  data: SubCategoryType[];
};

export type UserRegisterResponseType = {
  user: {
    name: string;
    email: string;
    role: string;
    is_verified: boolean;
    updated_at: string;
    created_at: string;
    id: number;
  };
  email_sent: string;
};

export type ResendOtpType = {
  success: boolean;
  message: string;
};

export type UserDetailsType = {
  data: {
    id: number;
    name: string;
    email: string | null;
    role: "Regular" | "Admin";
    image_url: string | null;
    about: string | null;
    location: string;
    business_addr: string | null;
    business_num: string | null;
    facebook_link: string | null;
    instagram_link: string | null;
    whatsapp_num: string | null;
    can_answer_question: boolean;
    can_ask_question: boolean;
    request_made: RequestType[];
    requests_responded: RequestType[];
    question_answer: ProfileQuestionAnswer[];
  };
};

export type ProfileQuestionAnswer = {
  id: number;
  question: string;
  answer: string | null;
  created_at: string;
};

export type UserPreferenceType = {
  all_categories: boolean;
  all_locations: boolean;
  id: number;
  post_anonymous: boolean;
  selected_categories: string[];
  selected_locations: string[];
  user_id: string;
};

export type ProfileQuestionResponseType = {
  success: boolean;
  email_sent: boolean;
  message: string;
};

export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export interface RWebShareProps {
  children: any;
  closeText?: string;
  data: ShareData;
  sites?: string[];
  onClick?: () => void;
  disableNative?: boolean;
}

export interface SocialIconsProps {
  onClose: () => void;
  closeText?: string;
  sites: string[];
  data: Required<ShareData>;
  onClick?: () => void;
}

export interface IconProps {
  onClose: () => void;
  name: string;
  data: Required<ShareData>;
  onClick: () => void;
}

export interface IconItem {
  path: JSX.Element;
  // e;
  color: string;
  viewBox?: string;
}
