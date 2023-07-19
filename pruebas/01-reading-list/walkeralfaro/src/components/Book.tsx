
interface BookProps {
  img: string;
  title: string;
}

export const Book = ({img, title} : BookProps )=> {
  return (
    <img src={img} alt={title} width={150} />
  )
}