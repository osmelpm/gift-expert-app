import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

interface Gift {
  id: string;
  title: string;
  url: string;
}

type UseFetchGifts = (category: string) => {
  gifts: Gift[];
  isLoading: boolean;
};

export const useFetchGifts: UseFetchGifts = (category) => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getGifts(category)
      .then(setGifts)
      .finally(() => setIsLoading(false));
  }, []);

  return { gifts, isLoading };
};
