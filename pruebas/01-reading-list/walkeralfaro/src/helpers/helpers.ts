
import { BookProps } from '../types/bookTypes'

export function readGenres(booksList: BookProps[]) {

  const allGenres: string[] = booksList.map( ({genre}) => (genre));
  const uniqueGenres: string[] = allGenres.filter( (genre, index) => allGenres.indexOf(genre) === index )

  return uniqueGenres

} 