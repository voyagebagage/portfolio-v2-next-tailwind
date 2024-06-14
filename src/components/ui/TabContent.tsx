import React from "react";
import Image from "next/image";
// import SimpleList from "./SimpleList";
import XStack from "./XStack";

type SimpleListProps = {
  myList: string[];
};

const SimpleList = ({ myList }: SimpleListProps) => (
  <ul style={{ listStyleType: "none", padding: 0 }}>
    {myList?.map((item, idx) => (
      <li key={idx} style={{ display: "flex", alignItems: "center" }}>
        {/* <span>{React.createElement(icon || BiIcons.BiRightArrow)}</span> */}
        <span style={{ marginLeft: "8px" }}>{item}</span>
      </li>
    ))}
  </ul>
);

interface TabContentProps {
  title: string;
  imageSrc1: string;
  imageSrc2: string;
  imageAlt1: string;
  imageAlt2: string;
  date: string;
  externalLink: string;
  listItems: string[];
}

const TabContent: React.FC<TabContentProps> = ({
  title,
  imageSrc1,
  imageSrc2,
  imageAlt1,
  imageAlt2,
  date,
  externalLink,
  listItems,
}) => {
  return (
    <>
      <div className="relative w-full h-48">
        <Image
          src={imageSrc1}
          alt={imageAlt1}
          layout="fill"
          className="object-cover rounded-t-lg filter brightness-65 grayscale-60 blur-px"
        />
        <div className="absolute top-4 left-4 h-24 w-24 rounded-full border">
          <Image
            src={imageSrc2}
            alt={imageAlt2}
            layout="fill"
            className="object-contain rounded-full"
          />
        </div>
        <h3 className="text-lg font-bold pt-2 pl-32 text-shadow-lg">{title}</h3>
      </div>
      <XStack className="w-full py-4 flex items-center justify-between px-6">
        <h4 className="text-md">{date}</h4>
        <a href={externalLink} className="text-blue-500 hover:underline">
          External Link
        </a>
      </XStack>
      <div className="w-full h-full py-2">
        <div className="py-2">
          <SimpleList myList={listItems} />
        </div>
      </div>
    </>
  );
};

export default TabContent;
