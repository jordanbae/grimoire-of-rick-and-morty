import Filter from "../components/Filter";
import { useState, useEffect } from "react";
import Info from "../components/Info";
import axios from "axios";
import Paginate from "../components/Paginate";


export default function Browse() {
  const [card, setCard] = useState();
  const [totalPages, setTotalPages] = useState();
  const [charDead, setCharDead] = useState(true);
  const [charStatus, setCharStatus] = useState(1);
  const [statusValidate, setStatusValidate] = useState(1)
  const [charName, setCharName] = useState('');

  const [urlParam, setUrlParam] = useState('https://rickandmortyapi.com/api/character/?page=');
  const [statusParam, setStatusParam] = useState('&&status=')
  const [nameParam, setNameParam] = useState('&&name=')

  const [loading, setLoading] = useState(false);

  //thinking of creating dead or alive state

  useEffect(() => {
    const getResponse = () => {
      axios
        .get(urlParam)
        .then((res) => {
          setCard(res.data.results);
          setTotalPages(res.data.info.pages);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getResponse();
  }, []);

  // console.log('totalpages in browse', totalPages)
  return (
    <>
      <Filter
        card={card}
        setCard={setCard}
        setTotalPages={setTotalPages}
        statusValidate={statusValidate}
        setStatusValidate={setStatusValidate}
        charName={charName}
        setCharName={setCharName}
        urlParam={urlParam}
        setUrlParam={setUrlParam}
        statusParam={statusParam}
        setStatusParam={setStatusParam}
        nameParam={nameParam}
        setNameParam={setNameParam}
      />
      <Info card={card} />
      <Paginate
        card={card}
        setCard={setCard}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        setCharDead={setCharDead}
        charDead={charDead}
        statusValidate={statusValidate}
        setStatusValidate={setStatusValidate}
        urlParam={urlParam}
        setUrlParam={setUrlParam}
        statusParam={statusParam}
        setstatusParam={setStatusParam}
        nameParam={nameParam}
        setNameParam={setNameParam}
      />
    </>
  );
}
