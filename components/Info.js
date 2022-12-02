export default function Info(props) {
  return (
    <>
      <div className="card-layout">
        {props.bQuery.map((element, key) => {
          return (
            <div key={key} className="card-layout__item">
              <img className="char-img" src={`${element.image}`} />
              <div className="char-info">
                <section className="char-name-status">
                  {element.name} <span> {element.status}</span>{" "}
                  <span> {element.location.name}</span>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
