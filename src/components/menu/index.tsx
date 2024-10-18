import { RestaurantContext } from "@/contexts";
import { MenuItem } from "@/types";
import { useContext, useState } from "react";
import "./index.css";

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const { menu, styling } = useContext(RestaurantContext);

  const formattedMenuItems = menu[activeMenu].items.reduce(
    (acc: Array<MenuItem | string>, curr: MenuItem | string) => {
      // @ts-ignore
      return [...acc, curr.category, ...curr.items];
    },
    [] as Array<MenuItem | string>
  );
  const totalNumberOfItems = formattedMenuItems.length;

  const columnLength = Math.ceil(totalNumberOfItems / 3);
  const finalColumnLength = columnLength < 10 ? 10 : columnLength;
  const numberOfColumns = Math.ceil(totalNumberOfItems / finalColumnLength);

  const getChunk = (chunk: number) => {
    let appendLastItemToNextChunk = false;
    let appendPrevChunkLastItem = false;

    if (typeof formattedMenuItems[chunk * finalColumnLength - 1] === "string") {
      appendLastItemToNextChunk = true;
    }
    if (
      typeof formattedMenuItems[(chunk - 1) * finalColumnLength - 1] ===
      "string"
    ) {
      appendPrevChunkLastItem = true;
    }

    return [
      appendPrevChunkLastItem &&
        formattedMenuItems[(chunk - 1) * finalColumnLength - 1],
      ...formattedMenuItems.slice(
        finalColumnLength * (chunk - 1),
        appendLastItemToNextChunk
          ? finalColumnLength * chunk - 1
          : finalColumnLength * chunk
      ),
    ].filter(Boolean);
  };
  const chunk1 = getChunk(1);
  const chunk2 = getChunk(2);
  const chunk3 = getChunk(3);

  const columns = [chunk1, chunk2, chunk3] as unknown as Array<
    Array<{ title: string; price: string; description: string } | string>
  >;

  return (
    <div id="menu" className="pt-24 px-56 w-full">
      <div className="flex flex-row w-full gap-x-8 justify-center mb-16">
        {menu.map(({ title }, index) => (
          <h3
            onClick={() => setActiveMenu(index)}
            style={{
              cursor: menu.length > 0 ? "pointer" : "",
              color:
                menu.length > 0 && index === activeMenu
                  ? styling.primaryColor
                  : "",
            }}
          >
            {title}
          </h3>
        ))}
      </div>
      <div className="flex flex-row justify-around gap-24">
        {Array(numberOfColumns)
          .fill("")
          .map((_item, columnIndex) => (
            <div className="flex flex-col gap-y-4 flex-1">
              {columns[columnIndex].map((columnItem) => {
                if (typeof columnItem === "string")
                  return <p className="category font-semibold">{columnItem}</p>;
                return (
                  <div className="flex flex-row justify-between gap-x-4">
                    <div>
                      <p>{columnItem.title}</p>
                      <i>{columnItem.description}</i>
                    </div>
                    <p>{columnItem.price}</p>
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    </div>
  );
};
