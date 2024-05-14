import RussiaMap from './components/RussiaMap/RussiaMap';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import React from 'react';
import { BrowserRouter as Router, Route, Router } from 'react-router-dom';
import Header from './Header';
// import About from './About';
// import Departments from './Departments';
// import Directions from './Directions';
// import Events from './Events';
// import Blog from './Blog';
// import Contacts from './Contacts';
// import MainPage from 'pages/MainPage';

import './index.scss';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Router>
          <Route path="/about" component={About} />
          <Route path="/departments" component={Departments} />
          <Route path="/directions" component={Directions} />
          <Route path="/events" component={Events} />
          <Route path="/blog" component={Blog} />
          <Route path="/contacts" component={Contacts} />
        </Router>
        <RussiaMap />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
