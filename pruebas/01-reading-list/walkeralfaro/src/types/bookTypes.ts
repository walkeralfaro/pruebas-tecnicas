export interface BookProps {
  ISBN: string;
  title: string;
  author: {
      name: string;
      otherBooks: string[];
  };
  cover: string;
  genre: string;
  pages: number;
  synopsis: string;
  year: number;
}