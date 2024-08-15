const SocialItem = ({ linkTo, img, title }: SocialItemInterface) => {
  return (
    <div className="w-12 h-12">
      <a href={linkTo} target="_blank" className="no-underline">
        <img src={img} alt={title} className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" />
      </a>
    </div>
  );
};

export default SocialItem;

interface SocialItemInterface {
  linkTo: string;
  img: string;
  title: string;
}
