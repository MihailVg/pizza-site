import React, { useEffect, useState } from 'react';

import './scss/app.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6641f7503d66a67b3435a069.mockapi.io/items')
      .then(res => res.json())
      .then(res => {
        setItems(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {isLoading
              ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
              : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
