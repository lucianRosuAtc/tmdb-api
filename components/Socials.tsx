import { social } from "./(link-data)/social-data";


interface SocialsProps{
  MyClassName: string;
}
export default function Socials({MyClassName}: SocialsProps) {
  return (
    <div className="flex gap-x-8 mx-auto xl:mx-0">
      {social.map((item, index) => (
        <a
          href={item.url}
          key={index}
          target="_blank"
          className={MyClassName}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
