import React from 'react';

// import ThemeContextProvider from './contexts/ThemeContext';
// import Navbar from './components/Navbar';
// import BookList from './components/BookList';
// import ThemeToggle from './components/ThemeToggle';
// import AuthContextProvider from './contexts/AuthContext';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
      <SongList />
      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> */}
    </div>
  );
}

export default App;
