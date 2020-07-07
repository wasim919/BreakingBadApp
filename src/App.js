import React, { useEffect, useState } from 'react';
import { CharacterGrid, Input } from './components';
import { fetchCharacters } from './api';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App.module.css';

export default function () {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const characters = await fetchCharacters(query);
      dispatch({
        type: 'ADD_CHARACTERS',
        payload: {
          isLoading: false,
          characters: characters,
        },
      });
    })([query]);
  });
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const isLoading = useSelector((state) => state.isLoading);
  return isLoading ? (
    <div className='row'>Loading...</div>
  ) : (
    <div className='container'>
      <Input onChange={onChange} />
      <CharacterGrid />
    </div>
  );
}
