import { Book } from "../interfaces/Global";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatBookData(data: any): Book {
  return {
    id: data.id,
    title: data.title,
    author: data.author,
    price: data.price,
    image: data.imgUrl,
    category: data.category,
  };
}

export const getBooks = async (queryParams?: URLSearchParams) => {
  let url = import.meta.env.VITE_API_URL + "/buscador/books";
  if (queryParams) url = url + "?" + queryParams.toString();
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching books");
  }

  const data = await response.json();
  return {
    books: data.books.map(formatBookData),
    aggs: data.aggs,
  };
};
