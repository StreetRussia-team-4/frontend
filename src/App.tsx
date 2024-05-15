// import RussiaMap from './elements/RussiaMap/RussiaMap';
import { ScrollToTopButton } from './components';
import { WidgetPlayer } from './components';
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './modules/Header';
import styles from './App.module.scss';
import './vendor/benzin/benzin.css'; //не поняла, как будет работать добавленике шрифтов через модули. В модуле Typhoraphy? пока сделала так, чтобы поверстать что-то

// import About from './About';
// import Departments from './Departments';
// import Directions from './Directions';
// import Events from './Events';
// import Blog from './Blog';
// import Contacts from './Contacts';
// import MainPage from 'pages/MainPage';

import './index.scss';
//убрала повторное использование BrowserRouter, уже есть в Main
function App() {
  return (
    <>
      <div className={styles.root}>
        <Header />
        <Routes>
          <Route path="/" element={<WidgetPlayer />} />
          {/* <Route path="/about" element={About} />
          <Route path="/departments" element={Departments} />
          <Route path="/directions" element={Directions} />
          <Route path="/events" element={Events} />
          <Route path="/blog" element={Blog} />
          <Route path="/contacts" element={Contacts} /> */}
        </Routes>
        {/* <RussiaMap /> */}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
