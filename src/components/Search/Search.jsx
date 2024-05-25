import React, { useCallback, useContext, useState } from 'react';

import styles from './Search.module.scss';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

export const Search = () => {
  const { setInputValue } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchDebounce = useCallback(
    debounce(searchValue => {
      setInputValue(searchValue);
    }, 500), []);

  const onChangeSearch = value => {
    setSearchValue(value);
    onChangeSearchDebounce(value);
  };

  return (
    <input
      value={searchValue}
      onChange={event => onChangeSearch(event.target.value)}
      className={styles.root}
      placeholder='Поиск пиццы...'
    />
  );
};
