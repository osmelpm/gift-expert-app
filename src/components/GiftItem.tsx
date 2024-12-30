interface GiftProps {
  title: string;
  url: string;
}

export const GiftItem = ({ title, url }: GiftProps) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
