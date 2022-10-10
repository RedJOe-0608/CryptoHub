import {Routes, Route} from 'react-router-dom'
import Center from './components/Center';
import CryptoCurrencies from './components/CryptoCurrencies';
import CryptoDetails from './components/CryptoDetails';
import Homepage from './components/Homepage';
import News from './components/News';

function App() {
  return (
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/cryptocurrencies' element={<CryptoCurrencies />} />
      <Route path='/crypto/:uuid' element={<CryptoDetails />} />
      <Route path='/news' element={<News />} />
     </Routes>
  
  );
}

export default App;
