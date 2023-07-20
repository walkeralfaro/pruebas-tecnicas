
interface LocalBookProps {
  cover: string;
  title: string;
  ISBN: string;
  reading: boolean;
  readingStateChange: (ISBN: string) => void;
}

export const Book = ({ ISBN, cover, title, reading, readingStateChange} : LocalBookProps )=> {


  return (
    <>
    
      <img src={cover} alt={title} width={150} />

      {
        !reading ? 
        <button
          onClick={() => readingStateChange(ISBN)}
        >add to reading list</button>
        :
        <button
          onClick={() => readingStateChange(ISBN)}
        >remove from reading list</button>
      }

    </>
  )
}