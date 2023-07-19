// import { Libro } from "./Libro"
import { BooksProps } from '../types/bookTypes'
import { Book } from './Book';

export const Books = ({books, filters, InitialStateFilters}: BooksProps) => {

  console.log(filters);
  
  return (

    <>

    {
      books.map( (book) => {
        if(filters.genre === book.genre || filters.genre === InitialStateFilters.genre) {
          return (
          <Book
            key={book.ISBN}
            cover={book.cover}
            title={book.title}
          />
          )}
        })
    }

    
    </>

  )
      
    
}
