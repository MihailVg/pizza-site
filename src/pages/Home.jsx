import React, { useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import { Pagination } from '../components/Pagination/Pagination';

export const Home = ({ inputValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [categoriesActivity, setActive] = useState(0);
  const [sortType, setSortType] = useState('rating');
  
  const [currentPage, setCurrentPage] = useState(1)

  let categoriesShowed = categoriesActivity === 0? '' : categoriesActivity

  useEffect(() => {
    setIsLoading(true)
    fetch('https://6641f7503d66a67b3435a069.mockapi.io/items?page=' + currentPage + '&limit=8&category=' + categoriesShowed + '&sortBy=' + sortType)
      .then(res => res.json())
      .then(res => {
        setItems(res);
        setIsLoading(false);
      });
      window.scrollTo(0, 0)
  }, [categoriesShowed, sortType, currentPage]);

  let pizzas = items.filter((item) => {
    return item.title.toLowerCase().includes(inputValue)
  }).map(obj => <PizzaBlock key={obj.id} {...obj} />)

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories activity={categoriesActivity} setActive={(activityId) => setActive(activityId)} />
        <Sort sortType={sortType} setSortType={(sortTypeId) => setSortType(sortTypeId)}/>
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas}
      </div>
      {categoriesActivity === 0 ? <Pagination onChangePage={number => setCurrentPage(number)}/> : ''}
    </div>
  );
};
