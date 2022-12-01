import tempchar from '../public/tempchar.json'
console.log(tempchar)

export default function Browse() {
    return(
        <>
          {tempchar.map((ele, key)=> {
            return(
                <div key={key}>
                    <h1>{ele.name}</h1>
                </div>
            )
          })}  
        </>
    )
}