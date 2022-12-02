import tempchar from "../public/tempchar.json";
import Filter from "../components/Filter";
import {useState, useEffect} from 'react';
import Info from "../components/Info"
console.log(tempchar);


const tempPageUrl = 'https://rickandmortyapi.com/api/character/?page='
let pageUrlArr = [];

export default function Browse() {
  const [card, setCard] = useState([])

  useEffect(() => {
    setCard(tempchar.results)
    console.log('tempchar in useeffect', tempchar)
    const countPage = () => {
      {for (let i = 1; i <= tempchar.info.pages; i++) {
        let pageUrl = tempPageUrl + i;
        pageUrlArr.push(pageUrl);
      }}
      console.log(pageUrlArr)
    }
    countPage();
  },[])



  return (

    <>

      <Filter setCard={setCard}/>
      <Info card={card}/>
    </>
  );
}
