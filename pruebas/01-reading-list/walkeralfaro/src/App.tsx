import { useEffect, useRef, useState } from "react";
import { Filter } from "./components/Filter"

import { readGenres } from "./helpers/helpers";
import { useBooks } from "./hooks/useBooks";
import { Books } from "./components/Books";

import { BookProps } from "./types/bookTypes";
import { ReadingBooks } from "./components/ReadingBooks";

const InitialStateFilters = {
  genre: 'Todos',
  pages: 'Menor a Mayor',
  year: 'Mayor a Menor',
}

// ------------------------------------------------------------------------------------------
export const App = () => {

  const {books} = useBooks()
  const [filters, setFilters] = useState(InitialStateFilters)
  const [listBooks, setListBooks] = useState<BookProps[]>([])
  const booksRef = useRef(books);

  useEffect( () => {

    const storedValue = localStorage.getItem('savedItems');


    if(storedValue) {


  


      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const booksStored : BookProps[] = JSON.parse(storedValue)

      console.log(booksStored)


      


         setListBooks(booksStored)

    
        

    } else {
      
      localStorage.setItem('savedItems', JSON.stringify(booksRef.current));
      // const storedValue = localStorage.getItem('savedItems');

    }


  }, [] )



  const handleFilterChange = (selectedValue: object) => {
    setFilters({...filters, ...selectedValue })
  }

  const handleAddReadingList = (ISBN: string) => {
    const updatedBooks = listBooks.map((book) => 
      book.ISBN === ISBN ? { ...book, reading: !book.reading } : book
    );
    setListBooks(updatedBooks);
  }
  
  return (
    <div>
      <h1>Catálogo de Libros</h1>

      <header>
        <Filter name="genre" values={[InitialStateFilters.genre, ...readGenres(listBooks)]} onFilterChange={handleFilterChange}/>
      </header>

      <main>
        <Books books={listBooks} filters={filters} InitialStateFilters={InitialStateFilters} readingStateChange={handleAddReadingList}/>
      </main>

      <aside>
        <ReadingBooks books={listBooks} readingStateChange={handleAddReadingList}/>
      </aside>

    </div>
  )
}
