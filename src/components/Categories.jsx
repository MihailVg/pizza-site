import { useState } from 'react';

export default function Categories() {
  const [activity, setActive] = useState(0);
  const clickHandler = index => {
    setActive(index);
  };

  const categoriesArray = [
    'Все',
    'Мясные',
    'Вегатерианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className='categories'>
      <ul>
        {categoriesArray.map(element => {
          return (
            <li
              key={categoriesArray.indexOf(element)}
              onClick={() => clickHandler(categoriesArray.indexOf(element))}
              className={
                activity === categoriesArray.indexOf(element) ? 'active' : ''
              }
            >
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
