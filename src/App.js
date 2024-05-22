import './scss/app.scss';
import Header from './components/Header/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className='wrapper'>
      <Header inputValue={inputValue} setInputValue={(i) => setInputValue(i)} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home inputValue={inputValue} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
