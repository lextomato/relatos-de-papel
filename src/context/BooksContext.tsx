import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Book } from "../interfaces/Global";
import { getBooks } from "../utils/booksService";

interface BooksContextProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BooksContext = createContext<BooksContextProps | undefined>(
  undefined
);

export const BooksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Simulación de datos de libros
  const [books, setBooks] = useState<Book[]>([
    // {
    //   id: "1",
    //   title: "El Quijote",
    //   author: "Miguel de Cervantes",
    //   price: 20,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "2",
    //   title: "Cien Años de Soledad",
    //   author: "Gabriel García Márquez",
    //   price: 25,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "3",
    //   title: "La Odisea",
    //   author: "Homero",
    //   price: 15,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "4",
    //   title: "1984",
    //   author: "George Orwell",
    //   price: 18,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "5",
    //   title: "Matar a un ruiseñor",
    //   author: "Harper Lee",
    //   price: 22,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "6",
    //   title: "Orgullo y prejuicio",
    //   author: "Jane Austen",
    //   price: 19,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "7",
    //   title: "El Gran Gatsby",
    //   author: "F. Scott Fitzgerald",
    //   price: 21,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "8",
    //   title: "Crimen y castigo",
    //   author: "Fiódor Dostoyevski",
    //   price: 24,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "9",
    //   title: "En busca del tiempo perdido",
    //   author: "Marcel Proust",
    //   price: 30,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "10",
    //   title: "Don Quijote de la Mancha",
    //   author: "Miguel de Cervantes",
    //   price: 20,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "11",
    //   title: "El amor en los tiempos del cólera",
    //   author: "Gabriel García Márquez",
    //   price: 25,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "12",
    //   title: "La Iliada",
    //   author: "Homero",
    //   price: 15,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "13",
    //   title: "Rebelión en la granja",
    //   author: "George Orwell",
    //   price: 18,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "14",
    //   title: "Matar a un ruiseñor",
    //   author: "Harper Lee",
    //   price: 22,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "15",
    //   title: "Emma",
    //   author: "Jane Austen",
    //   price: 19,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "16",
    //   title: "El Gran Gatsby",
    //   author: "F. Scott Fitzgerald",
    //   price: 21,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "17",
    //   title: "Los hermanos Karamazov",
    //   author: "Fiódor Dostoyevski",
    //   price: 24,
    //   image: "https://dummyimage.com/300x350",
    // },
    // {
    //   id: "18",
    //   title: "A la recherche du temps perdu",
    //   author: "Marcel Proust",
    //   price: 30,
    //   image: "https://dummyimage.com/300x350",
    // },
  ]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
