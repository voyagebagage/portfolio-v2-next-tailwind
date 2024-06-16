import { QueryClient, useQuery } from "@tanstack/react-query";
import { it } from "node:test";

const items = [
  {
    IconName: "/reactLogo.png",
    name: "React",
    color: "#60DBFA",
    heigth: 500,
    width: 500,
  },
  {
    IconName: "/GraphQLLogo.png",
    name: "GraphQl",
    color: "#B054AE",
    heigth: 1024,
    width: 1024,
  },
  {
    IconName: "/mongodb.png",
    name: "MongoDB",
    color: "#59AA51",
    heigth: 256,
    width: 256,
  },
  {
    IconName: "/AWSLogo.png",
    name: "AWS",
    color: "#F2982C",
    heigth: 320,
    width: 145,
  },
  {
    IconName: "/nextRoundBlue.png",
    name: "Next",
    color: "#74D4CF",
    heigth: 500,
    width: 500,
  },
  {
    IconName: "/reactMotion2.png",
    name: "F.Motion",
    color: "#7354C4",
    heigth: 971,
    width: 918,
  },
];

let currentIndex = 0;
const fetchItem = async () => {
  if (currentIndex >= items.length) {
    currentIndex = 0; // Reset index if all items have been returned
  }
  const currentItem = items[currentIndex];
  currentIndex++;
  return currentItem;
};

const useItem = () => {
  return useQuery({
    queryKey: ["item"],
    queryFn: fetchItem,
    refetchInterval: 5000, // Refetch every 5 seconds
    refetchIntervalInBackground: true,
    staleTime: Infinity, // Keep data fresh indefinitely
    gcTime: 0, // Do not cache the data
  });
};

export default useItem;
