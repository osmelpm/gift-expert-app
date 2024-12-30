interface Gift {
  id: string;
  title: string;
  images: { downsized_medium: { url: string } };
}

export const getGifts = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=v43ETpdRbYpEixz7ORZfNjDH2xYtRkxY&q=${category}&limit=100`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map(({ id, title, images }: Gift) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));

  return gifts;
};
