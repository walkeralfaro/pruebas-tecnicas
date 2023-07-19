import { useEffect, useState } from "react";
import { Filter } from "./components/Filter"

import { readGenres } from "./helpers/helpers";
import { useBooks } from "./hooks/useBooks";
import { Books } from "./components/Books";

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

  useEffect( () => {
    console.log('filtro cambió');
    
  }, [filters] )

  return (
    <div>
      <h1>Catálogo de Libros</h1>

      <header>
        <Filter name="genre" values={[InitialStateFilters.genre, ...readGenres(books)]} onFilterChange={handleFilterChange}/>
      </header>

      <main>
        <Books books={books} filters={filters} InitialStateFilters={InitialStateFilters} />
      </main>

    </div>
  )
}
