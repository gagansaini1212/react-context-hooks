import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Name of the wind', author: 'Patrick rothfuss' },
    { id: 2, title: 'The way of kings', author: 'Brandn Sanderson' },
    { id: 3, title: 'The final empire', author: 'Lorem' },
    { id: 4, title: 'The hero of ages', author: 'Lorem Ipsum' },
  ]);

  const addBook = (title, author) => {
    setBooks(...books, { id: uuidv4(), title: title, author: author });
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
