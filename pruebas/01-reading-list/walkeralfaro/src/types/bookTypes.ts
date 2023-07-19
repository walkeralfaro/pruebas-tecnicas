export type BookProps = {
  ISBN: string,
  title: string,
  author: {
      name: string;
      otherBooks: string[];
  };
  cover: string,
  genre: string,
  pages: number,
  synopsis: string,
  year: number,
}

export type FilterProps = {
  genre: string,
  year: string,
  pages: string
}

export type BooksProps = {
  books: BookProps[],
  filters: FilterProps,
  InitialStateFilters: FilterProps,

}