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
  reading:boolean,
}

export type FilterProps = {
  genre: string,
  year: string,
  pages: string
}

export type BooksProps = {
  books: BookProps[],
  readingStateChange: (ISBN: string) => void,
  filters?: FilterProps,
  InitialStateFilters?: FilterProps,

}

export type ReadingBooksProp = {
  readingBooks: BookProps[],
}