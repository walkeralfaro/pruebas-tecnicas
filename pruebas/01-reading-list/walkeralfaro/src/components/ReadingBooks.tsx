// import { Libro } from "./Libro"
import { BooksProps } from '../types/bookTypes'
import { Book } from './Book';

export const ReadingBooks = ({books, readingStateChange}: BooksProps) => {


  return (

    <>
    {
      books.map( (book) => {
        if(book.reading === true) {
          return (
            
            <Book
              key={book.ISBN}
              cover={book.cover}
              title={book.title}
              reading={book.reading}
              ISBN={book.ISBN}
              readingStateChange={readingStateChange}
            />
        )}
      })
    }
    </>
  )
}
