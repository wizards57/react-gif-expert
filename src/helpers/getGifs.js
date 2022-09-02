export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=XDsK4byoEtIaEv1X8188z8kXqgR6kr7m&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  //console.log(data);

  const gifs = data.map((img) => ({
    url: img.images.fixed_width_small.url,
    id: img.id,
    title: img.title,
  }));
  //console.log(url);
  return gifs;
};
