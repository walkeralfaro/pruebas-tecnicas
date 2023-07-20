
interface LocalBookProps {
  cover: string;
  title: string;
  reading: boolean;
  readingStateChange: (readingState: boolean) => void;
}

export const Book = ({cover, title, reading, readingStateChange: readingState} : LocalBookProps )=> {

  const handleAddReadingList = () => {
    readingState(true)
    
  }

  console.log(reading);
  
  return (
    <>
    
      <img src={cover} alt={title} width={150} />
      <button
        onClick={handleAddReadingList}
      >add reading list</button>
    </>
  )
}