import { useState } from "react";
import { Filter } from "./components/Filter"

import { Book } from "./components/Book";
import { readGenres } from "./helpers/helpers";
import { useBooks } from "./hooks/useBooks";

const InitialStateFilters = {
  genre: 'Todos',
  pages: 'Menor a Mayor',
  year: 'Mayor a Menor',
}

// ------------------------------------------------------------------------------------------
export const App = () => {

  const {books} = useBooks()
  const [filters, setFilters] = useState(InitialStateFilters)

  const handleFilterChange = (selectedValue: object) => {
    setFilters({...filters, ...selectedValue })
  }

  return (
    <div>
      <h1>Catálogo de Libros</h1>

      <header>
        <Filter name="genre" values={[InitialStateFilters.genre, ...readGenres(books)]} onFilterChange={handleFilterChange}/>
      </header>

      <main>

        {
          books.map( ({ISBN, cover, title, genre}) => {
            if(filters.genre === genre || filters.genre === InitialStateFilters.genre) {
              return (
              <Book
                key={ISBN}
                img={cover}
                title={title}
              />
              )}
            })
        }
      </main>

    </div>
  )
}
