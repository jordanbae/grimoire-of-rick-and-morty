import Filter from "../components/Filter";
import {useState, useEffect} from 'react';
import Info from "../components/Info"
import axios from 'axios'




const tempPageUrl = 'https://rickandmortyapi.com/api/character/?page='

export default function Browse() {
  const [card, setCard] = useState()
  const [totalPages, setTotalPages] = useState()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getResponse = () => {
      axios.get('https://rickandmortyapi.com/api/character')
      .then((res) => {
        setCard(res.data.results)
        setTotalPages(res.data.info.pages)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    getResponse();
  },[])



  // console.log('totalpages in browse', totalPages)
  return (
    <>
      <Filter card={card} setCard={setCard}/>
      <Info card={card} totalPages={totalPages} setCard={setCard}/>
    </>
  );
}
