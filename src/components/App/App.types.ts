export interface image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
    social: {
      instagram_username: string;
      twitter_username: string;
    };
  };
  likes: number;
}

export type data = {
  results: image[];
  total: number;
  total_pages: number;
}

