import React from 'react';

// import ThemeContextProvider from './contexts/ThemeContext';
// import BookList from './components/BookList';
// import ThemeToggle from './components/ThemeToggle';
// import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

// import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
      {/* <SongList /> */}
      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> */}

      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
