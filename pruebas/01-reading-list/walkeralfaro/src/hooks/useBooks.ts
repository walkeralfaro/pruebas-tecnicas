import { library } from '../books.json';

export function useBooks () {

  const mappedBooks = library?.map( ({book}) => ({
    ISBN: book.ISBN,
    title: book.title,
    author: book.author,
    cover: book.cover,
    genre: book.genre,
    pages: book.pages,
    synopsis: book.synopsis,
    year: book.year,
  }))

  return { books: mappedBooks }

}