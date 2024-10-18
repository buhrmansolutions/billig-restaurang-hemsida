import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import { useContext } from "react";
import "./index.css";

export const About = () => {
  const { about } = useContext(RestaurantContext);
  const { image, sections, title } = about;
  return (
    <div id="about" className="flex flex-row pt-24 px-56 gap-x-24">
      <div className="mr-12 flex-1">
        <h2 className="mb-8">{title}</h2>
        {sections.map((section) => (
          <p key={section}>{section}</p>
        ))}
      </div>
      {image && (
        <div className="flex-1 relative rounded-lg overflow-hidden">
          <Image
            fill
            src={image}
            alt="About image"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
};
