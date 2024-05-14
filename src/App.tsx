// import RussiaMap from './components/RussiaMap/RussiaMap';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
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
          {/* <Route path="/about" component={About} /> //почему не element?
          <Route path="/departments" component={Departments} />
          <Route path="/directions" component={Directions} />
          <Route path="/events" component={Events} />
          <Route path="/blog" component={Blog} />
          <Route path="/contacts" component={Contacts} /> */}
        </Routes>
        {/* <RussiaMap /> */}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
