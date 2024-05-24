import './scss/app.scss';
import Header from './components/Header/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { createContext, useState } from 'react';

export const SearchContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={ {inputValue, setInputValue} }>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home inputValue={inputValue} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
