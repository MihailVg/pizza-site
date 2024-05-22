import React from 'react';

import styles from './Search.module.scss';

export const Search = ({ inputValue, setInputValue }) => {
  return (
    <input
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      className={styles.root}
      placeholder='Поиск пиццы...'
    />
  );
};
