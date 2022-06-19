import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');

  const handlleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };

  return (
    <form onSubmit={handlleSubmit}>
      <label>Song Name</label>
      <input
        type="text"
        required={true}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
