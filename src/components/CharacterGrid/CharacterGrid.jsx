import React from 'react';
import { useSelector } from 'react-redux';
import { Character } from '../';

export default function CharacterGrid() {
  const characters = useSelector(
    (state) => state.breakingBadReducer.characters
  );
  return (
    <div className='row'>
      {characters.map((character) => (
        <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-2 col-lg-3'>
          <Character character={character} key={character.char_id} />
        </div>
      ))}
    </div>
  );
}
