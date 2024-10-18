import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import "./index.css";

export const Header = () => {
  const { logo, menuItems } = useContext(RestaurantContext);

  return (
    <header className="w-full px-56 py-4 flex flex-row justify-between items-center">
      <Image src={logo} alt={logo} width={70} height={70} />
      <div className="flex gap-x-24">
        {menuItems.map(({ src, label }) => (
          <Link className="font-medium font-semibold" href={"#" + src}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};
