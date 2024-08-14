const TechItem = ({ image, text}: TechItemInterface) => {
  const PARSED_TEXT = text.toUpperCase();

  return (
    <div className={`w-20 min-h-20 flex flex-col gap-2 items-center justify-center`}>
      <img src={image} alt={text} className="object-cover  "  />

      <p className="text-center text-sm font-extralight text-gray-400">{PARSED_TEXT}</p>
    </div>
  );
};

export default TechItem;

interface TechItemInterface {
  image: string;
  text: string;
  size?: number;
}
