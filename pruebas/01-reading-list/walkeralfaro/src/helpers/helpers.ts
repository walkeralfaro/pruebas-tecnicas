
import { Book } from '../types/bookTypes'

export function readGenres(booksList: Book[]) {

  const allGenres: string[] = booksList.map( ({genre}) => (genre));
  const uniqueGenres: string[] = allGenres.filter( (genre, index) => allGenres.indexOf(genre) === index )

  return uniqueGenres
  
} 