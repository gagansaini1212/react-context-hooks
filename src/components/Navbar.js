import React, { useContext } from 'react';

import { BookContext } from '../contexts/BookContext';

// import { AuthContext } from '../contexts/AuthContext';
// import { ThemeContext } from '../contexts/ThemeContext';

// const Navbar = () => {
//   const { isLightTheme, light, dark } = useContext(ThemeContext);
//   const { isAuthenticated, toggleAuth } = useContext(AuthContext);
//   const theme = isLightTheme ? light : dark;

//   return (
//     <nav style={{ background: theme.ui, color: theme.syntax }}>
//       <h1>Context App</h1>
//       <div onClick={toggleAuth}>
//         {isAuthenticated ? 'Logged in' : 'Logged out'}
//       </div>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// };
const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>My Reading List</h1>
      <p>Currently, you have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
