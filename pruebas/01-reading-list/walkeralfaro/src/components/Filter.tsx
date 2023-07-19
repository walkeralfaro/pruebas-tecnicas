
export interface FilterProps {
  name: string;
  values: string[];
  onFilterChange: (selectedValue: object) => void;
}

// -------------------------------------------------------------------------------------------
export const Filter = ({ name, values, onFilterChange: onFilterOptionSelected }: FilterProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;
    const filterName = e.target.attributes[0].value;
    onFilterOptionSelected({[filterName]: filterValue});
  }

  
  
  return (
    <>
      <select
        name={name}
        onChange={handleChange}
      >
        {
          values.map( (filterValue) => (
            <option
              key={filterValue}
              value={filterValue}
            >
              {filterValue}
            </option>
          ))
        }
      </select>

      {

      }
    </>
  )
}
