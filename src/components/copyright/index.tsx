import { RestaurantContext } from "@/contexts";
import { useContext } from "react";
import "./index.css";

export const Copyright = () => {
  const { name } = useContext(RestaurantContext);
  return (
    <div
      id="copyright"
      className="px-56 w-full py-4 flex flex-row justify-center gap-16"
    >
      <p>
        All Rights Reserved © {new Date().getFullYear()} {name}
      </p>
    </div>
  );
};
