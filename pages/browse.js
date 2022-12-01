import tempchar from '../public/tempchar.json'
console.log(tempchar)

export default function Browse() {
    return(
        <>
          {tempchar.filter(one => {
            return (
                <div>
                    {one.species === 'Alien'}
                </div>
            )
          })}
        </>
    )
}