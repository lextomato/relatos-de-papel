import { useState, useEffect } from "react";
import { Book, FilterOptions } from "../interfaces/Global";
import { getBooks } from "../utils/booksService";

export const useFilteredBooks = (filters: FilterOptions) => {
  const [books, setBooks] = useState<Book[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [aggs, setAggs] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFilteredBooks = async () => {
      setLoading(true);
      try {
        // Construir la query string en función de los filtros disponibles
        const queryParams = new URLSearchParams();
        queryParams.append("aggregate", "true");
        if (filters.category) {
          queryParams.append("category", filters.category);
        }
        if (filters.author) {
          queryParams.append("author", filters.author);
        }
        if (filters.title) {
          queryParams.append("title", filters.title);
        }

        const data = await getBooks(queryParams);
        setBooks(data.books);
        setAggs(data.aggs);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredBooks();
  }, [filters]);

  return { books, aggs, loading, error };
};
