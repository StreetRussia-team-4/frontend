// import RussiaMap from './elements/RussiaMap/RussiaMap';
import { ScrollToTopButton } from './components';
import { WidgetPlayer } from './components';
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './modules/Header';
import { Footer } from './modules/Footer';
import { Upcoming } from './modules/Upcoming';
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
        <WidgetPlayer />
        <Upcoming />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Upcoming />
                <WidgetPlayer />
              </>
            }
          />
          {/* <Route path="/about" element={About} />
          <Route path="/departments" element={Departments} />
          <Route path="/directions" element={Directions} />
          <Route path="/events" element={Events} />
          <Route path="/projects" element={Projects} />
          <Route path="/blog" element={Blog} /> */}
        </Routes>
        {/* <RussiaMap /> */}
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
