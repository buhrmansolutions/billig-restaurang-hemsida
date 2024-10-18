import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../button";
import "./index.css";

export const Wallpaper = () => {
  const router = useRouter();
  const { wallpaper, name } = useContext(RestaurantContext);
  const { image, buttons, slogan } = wallpaper;
  return (
    <div id="wallpaper" className="relative w-full">
      <Image src={image} layout="fill" objectFit="cover" alt="large-image" />
      <div className="absolute flex-col w-full h-full flex justify-center items-center gap-y-12">
        <div className="flex-col flex items-center">
          <h2>{slogan}</h2>
          <h1>{name}</h1>
        </div>
        <div className="gap-x-4 flex">
          {buttons.map(({ label, src }) => (
            <Button onClick={() => router.push(src)}>{label}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};
