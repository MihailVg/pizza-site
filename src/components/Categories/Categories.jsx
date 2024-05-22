export default function Categories({activity, setActive}) {
  const clickHandler = index => {
    setActive(index);
  };

  const categoriesArray = [
    'Все',
    'Мясные',
    'Вегатерианские',
    'Гриль',
    'Острые',
    'Невкусные',
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
