import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Almost Home' },
    { id: 2, title: 'Memory gospel' },
    { id: 3, title: 'This wild darkness' },
  ]);

  const addSong = () => {
    setSongs([...songs, { id: uuidv4(), title: 'New Song' }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
