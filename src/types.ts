export type News = {
  id: number;
  by: string;
  title: string;
  url: string;
  time: string;
  score: number;
};

export type NewsItemProps = {
  id: number;
  index: number;
};
