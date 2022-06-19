import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Almost Home' },
    { id: 2, title: 'Memory gospel' },
    { id: 3, title: 'This wild darkness' },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { id: uuidv4(), title }]);
  };

  useEffect(() => {
    console.log('use effect hook is running', songs);
  }, [songs]);

  useEffect(() => {
    console.log('use effect hook is running', age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age : {age}</button>
    </div>
  );
};

export default SongList;
