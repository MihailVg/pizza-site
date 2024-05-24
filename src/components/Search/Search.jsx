import React, { useContext } from 'react';

import styles from './Search.module.scss';
import { SearchContext } from '../../App';

export const Search = () => {

  const {inputValue, setInputValue} = useContext(SearchContext)
  return (
    <input
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      className={styles.root}
      placeholder='Поиск пиццы...'
    />
  );
};
