import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import { useContext } from "react";
import "./index.css";

export const About = () => {
  const { about } = useContext(RestaurantContext);
  const { image, sections, title } = about;
  return (
    <div id="about" className="flex flex-row mt-24 px-56">
      <div className="mr-12">
        <h2 className="mb-8">{title}</h2>
        {sections.map((section) => (
          <p>{section}</p>
        ))}
      </div>
      {image && (
        <Image
          src={image}
          width={200}
          height={200}
          objectFit="cover"
          alt="about-image"
        />
      )}
    </div>
  );
};
