import {useState} from 'react'
import tempchar from "../public/tempchar.json";


export default function Filter(props) {

    // const [query, setQuery] = useState('')
    // console.log(query)
    // console.log('this is in filter', props.bQuery)
 
  return (
    <>
      <div className="browse-filter">
        <input type='text' className="input-search" placeholder="search" onChange={(e) => props.setBQuery()}></input>
        <button>search</button>
      </div>
    </>
  );
}
