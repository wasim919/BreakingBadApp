import React from 'react';
import cx from 'classnames';
import styles from './Input.module.css';

export default function Input({ onChange }) {
  return (
    <div className='container'>
      <form>
        <div className='form-group'>
          <label htmlFor='search'>Search</label>
          <input
            type='text'
            className={cx('form-control', styles.appInput)}
            id='search'
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
}
