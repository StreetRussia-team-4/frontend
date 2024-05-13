import { useEffect } from 'react';
import RussiaMap from './components/RussiaMap/RussiaMap';
import ScrollToTopButton from './components/RussiaMap/ScrollToTopButton/ScrollToTopButton';
import * as api from './utils/api';

import './index.scss';

function App() {
  useEffect(() => {
    api
      .fetchData()
      .then(res => {
        console.log('content: ', res);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <h1>Интерактивная карта России</h1>
      <RussiaMap />
      <ScrollToTopButton />
      <RussiaMap />
    </>
  );
}

export default App;
