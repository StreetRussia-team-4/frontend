// import RussiaMap from './elements/RussiaMap/RussiaMap';
import ScrollToTopButton from './elements/ScrollToTopButton/ScrollToTopButton';
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './modules/Header/ui/Header';
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
      <div>
        <Header />
        <Routes>
          <Route path="/" />
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
