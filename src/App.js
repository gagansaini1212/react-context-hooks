import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

// import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
// import BookList from './components/BookList';
// import ThemeToggle from './components/ThemeToggle';
// import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
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
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
