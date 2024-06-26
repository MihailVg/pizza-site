import React, { useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import { Pagination } from '../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

export const Home = ({ inputValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate()

  const categoriesActivity = useSelector(state => state.filter.categoryId);
  const dispatch = useDispatch();

  const setActive = id => {
    dispatch(setCategoryId(id));
  };

  

  const sortType = useSelector(state => state.filter.sortType.sorting);

  let categoriesShowed = categoriesActivity === 0 ? '' : categoriesActivity;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://6641f7503d66a67b3435a069.mockapi.io/items?page=' +
          currentPage +
          '&limit=8&category=' +
          categoriesShowed +
          '&sortBy=' +
          sortType
      )
      .then(res => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriesShowed, sortType, currentPage]);

  useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      categoriesShowed,
      currentPage,
    })
    navigate(`?${queryString}`)
  }, [categoriesShowed, sortType, currentPage, navigate])

  let pizzas = items
    .filter(item => {
      return item.title.toLowerCase().includes(inputValue);
    })
    .map(obj => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activity={categoriesActivity}
          setActive={activityId => setActive(activityId)}
        />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas}
      </div>
      {categoriesActivity === 0 ? (
        <Pagination onChangePage={number => setCurrentPage(number)} />
      ) : (
        ''
      )}
    </div>
  );
};
