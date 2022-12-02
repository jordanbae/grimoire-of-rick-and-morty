import tempchar from "../public/tempchar.json";
import Filter from "../components/Filter";
import {useState, useEffect} from 'react';
import Info from "../components/Info"
console.log(tempchar);

export default function Browse() {
  const [bQuery, setBQuery] = useState([])

  useEffect(() => {
    setBQuery(tempchar.results)
    console.log('tempchar in useeffect', tempchar)
  },[])

  return (

    <>
      <Filter setBQuery={setBQuery}/>
      <Info bQuery={bQuery}/>
    </>
  );
}
