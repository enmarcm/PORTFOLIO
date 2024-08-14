const SocialItem = ({ linkTo, img, title }: SocialItemInterface) => {
  return (
    <div className="w-12 h-12">
      <a href={linkTo} target="_blank" className="no-underline">
        <img src={img} alt={title} className="object-cover" />
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
