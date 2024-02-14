/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function CardModel({
  percent,
  image,
  name,
  onCardClick,
  selected,
}) {
  const handleClick = () => {
    onCardClick({ percent, image, name });
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform"
    >
      <h1 className="text-center mb-2">{name}</h1>
      <img
        src={image}
        alt="card image"
        className="w-full h-40 object-contain mb-2"
      />
      <span className="text-3xl font-bold underline text-center">
        {percent * 100}% TNA
      </span>
    </div>
  );
}
