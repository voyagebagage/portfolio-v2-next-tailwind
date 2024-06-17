import { items } from "@/app/data/items";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { color } from "framer-motion";

let currentIndex = 0;
const fetchItem = async () => {
  if (currentIndex >= items.length) {
    currentIndex = 0; // Reset index if all items have been returned
  }
  const currentItem = items[currentIndex];
  currentIndex++;
  return currentItem;
};

export const useItem = () => {
  return useQuery({
    queryKey: ["item", { color }],
    queryFn: async () => await fetchItem(),
    refetchInterval: 2000, // Refetch every 5 seconds
    refetchIntervalInBackground: true,
    staleTime: Infinity, // Keep data fresh indefinitely
    gcTime: 0, // Do not cache the data
  });
};
