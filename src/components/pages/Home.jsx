import CardMap from "../CardMap";
import { useState, useEffect } from "react";
import Calculator from "../Calculator";
export default function Home() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (data) => {
    setSelectedCard(data);
  };
  return (
    <div className="flex flex-col md:flex-row dark:bg-gray-900 ">
      <div className=" dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col w-full md:w-1/2 items-center">
        <h1 className="text-2xl font-bold my-4 py-8">Seleccione una opción</h1>
        <CardMap onCardClick={handleCardClick} selectedCard={selectedCard} />
      </div>
      {selectedCard && (
        <div className="w-full md:w-1/2">
          <Calculator selectedCard={selectedCard} />
        </div>
      )}
    </div>
  );
}
