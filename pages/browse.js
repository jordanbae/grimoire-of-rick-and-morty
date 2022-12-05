import Filter from "../components/Filter";
import { useState, useEffect } from "react";
import Info from "../components/Info";
import axios from "axios";
import Paginate from "../components/Paginate";
import Loading from "../components/Loading";

export default function Browse() {
  const [card, setCard] = useState();
  const [totalPages, setTotalPages] = useState();
  const [charDead, setCharDead] = useState(true);
  const [statusValidate, setStatusValidate] = useState(1);
  const [charName, setCharName] = useState("");

  const [initialUrl, setInitialUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [urlParam, setUrlParam] = useState(initialUrl);
  const [pageParam, setPageParam] = useState("?page=");
  const [statusParam, setStatusParam] = useState("&&status=");
  const [nameParam, setNameParam] = useState("&&name=");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponse = () => {
      setTimeout(() => {
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
      }, 500);
    };
    getResponse();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="vert-background-image">
          <Filter
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
            pageParam={pageParam}
            initialUrl={initialUrl}
          />
          <Info card={card} loading={loading} setLoading={setLoading}/>
          <Paginate
            setCard={setCard}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
            setCharDead={setCharDead}
            charDead={charDead}
            setStatusValidate={setStatusValidate}
            statusParam={statusParam}
            nameParam={nameParam}
            pageParam={pageParam}
            setPageParam={setPageParam}
            initialUrl={initialUrl}
          />
        </div>
      )}
    </>
  );
}
