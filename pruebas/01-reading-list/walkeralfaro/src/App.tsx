import { useState } from "react";
import { Filter } from "./components/Filter"



// ------------------------------------------------------------------------------------------
export const App = () => {

  const [filterSelected, setFilterSelected] = useState({
    genre: 'all',
    pages: 'a',
    year: 'menor a mayor'
  })

  const handleFilterChange = (selectedValue: object) => {
    setFilterSelected({...filterSelected, ...selectedValue })
  }

  console.log(filterSelected);
  

  

  return (
    <div>
      <h1>Catálogo de Libros</h1>

      <header>
        <Filter name="genre" values={['all', 'drama', 'ficción']} onFilterOptionSelected={handleFilterChange}/>
        <Filter name="pages" values={['a', 'b']} onFilterOptionSelected={handleFilterChange}/>
        <Filter name="year" values={['menor a mayor', 'b']} onFilterOptionSelected={handleFilterChange}/>
      </header>




    </div>
  )
}
