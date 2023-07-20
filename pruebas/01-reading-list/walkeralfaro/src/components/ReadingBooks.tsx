import { ReadingBooksProp } from '../types/bookTypes'
import { Book } from './Book';

export const ReadingBooks = ({readingBooks} : ReadingBooksProp ) => {

  console.log(readingBooks);

  const handleAddReadingList = () => {
    console.log('hola');
    
  }

  const readingBooksList = readingBooks.filter( readingBook => readingBook.reading === true  )
  
  return (
    <>
    
        {
          readingBooksList.filter( (book) => {
    
              return (
                
                <Book
                  key={book.ISBN}
                  cover={book.cover}
                  title={book.title}
                  reading={book.reading}
                  readingStateChange={handleAddReadingList}
                />
    
      
              
              )
            })
        }
    
    
    </>
  )
}
