import tempchar from "../public/tempchar.json";
import Filter from "../components/Filter";
import {useState, useEffect} from 'react';
import Info from "../components/Info"
console.log(tempchar);




const tempPageUrl = 'https://rickandmortyapi.com/api/character/?page='

export default function Browse() {
  const [card, setCard] = useState([])
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    setCard(tempchar.results)
    setTotalPages(tempchar.info.pages)

  },[])


  console.log('totalpages in browse', totalPages)
  return (
    <>
      <Filter setCard={setCard}/>
      <Info card={card} totalPages={totalPages}/>
    </>
  );
}
