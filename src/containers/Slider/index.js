import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  // console.log("index", index);

  const nextCard = () => {
    if (byDateDesc) { // Je m'assure que byDateDesc est correctement défini avant d'utiliser la fonction nextCard.
      setTimeout(
        () => setIndex(index < (byDateDesc.length - 1) ? index + 1 : 0),
        5000
      );
    }
  };
  useEffect(() => {

       // console.log("useEffect");

  nextCard();
  });

  // if (byDateDesc) {
  //  console.log("byDateDesc-premier élement date", getMonth(new Date(byDateDesc[0].date)));
  // }

  const handleRadioChange = (radioIdx) => {
  setIndex(radioIdx);
  };

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={event.id}>
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={radioIdx.id}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  onChange={() => handleRadioChange(radioIdx)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;