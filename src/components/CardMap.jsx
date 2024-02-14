/* eslint-disable react/prop-types */
import CardModel from "./CardModel.jsx";
import allCards from "../cards.json";
// import Calculator from "./Calculator.jsx";
export default function CardMap({ onCardClick, selectedCard }) {
  return (
    <div className="flex flex-col ">
      {allCards.cards?.map((option, index) => (
        <CardModel
          onCardClick={onCardClick}
          selected={selectedCard?.name === option.name}
          key={index}
          percent={option.TNA}
          image={option.image}
          name={option.name}
        />
      ))}
    </div>
  );
}
