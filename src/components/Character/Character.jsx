import React from 'react';
import cx from 'classnames';
import styles from './Character.module.css';

export default function ({ character }) {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-image'>
          <img
            className={cx('card-img-top', styles.cardImage)}
            src={character.img}
            alt=''
          />
        </div>
        <div className='card-text'>
          <h5 className='card-title'>Name: {character.name}</h5>
          <h5 className='card-title'>Nickname: {character.nickname}</h5>
          <h5 className='card-title'>Portrayed by: {character.portrayed}</h5>
        </div>
      </div>
    </div>
  );
}
