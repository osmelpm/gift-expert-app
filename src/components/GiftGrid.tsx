import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

interface GiftGridProps {
  category: string;
}

export const GiftGrid = ({ category }: GiftGridProps) => {
  const { gifts, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {gifts.map(({ id, ...gift }) => {
          return <GiftItem key={id} {...gift} />;
        })}
      </div>
    </>
  );
};
