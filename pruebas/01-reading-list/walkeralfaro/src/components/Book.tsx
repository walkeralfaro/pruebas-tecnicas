
interface LocalBookProps {
  cover: string;
  title: string;
}

export const Book = ({cover, title} : LocalBookProps )=> {
  return (
    <img src={cover} alt={title} width={150} />
  )
}