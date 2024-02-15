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
      className="mb-3 rounded-lg shadow-lg bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform border border-black"
    >
      <h1 className="text-3xl dark:text-gray-100 font-bold underline text-center pb-3">
        {name}
      </h1>
      <img
        src={image}
        alt="card image"
        className="w-full mx-auto h-40 object-contain mb-2"
      />
      <span className="block dark:text-green-400 text-2xl font-bold text-center mb-2 ">
        {percent * 100}% TNA
      </span>
    </div>
  );
}
