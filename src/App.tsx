import { Header } from './modules/Header';
import { Footer } from './modules/Footer';
import { Promo } from './modules/Promo';
// import { Upcoming } from './modules/Upcoming';
// import { SliderEvents } from './modules/Slider';
// import { cards } from './utils/constants';
import styles from './App.module.scss';
import './vendor/benzin/benzin.css';
import './index.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className={styles.root}>
        <Header />
        <Routes>
          <Route path="/" element={<Promo />}>
            {/* <Promo />
            <Upcoming />
            <SliderEvents cards={cards} /> */}
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
