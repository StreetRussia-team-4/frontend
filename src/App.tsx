import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@modules/Header';
import { Footer } from '@modules/Footer';
import { HomePage } from './pages';
import { EventsPage } from './pages';
import styles from './App.module.scss';
import './vendor/benzin/benzin.css';
import './index.scss';

function App() {
  return (
    <>
      <div className={styles.root}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
