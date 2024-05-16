import { WidgetPlayer } from './components';
import { Header } from './modules/Header';
import { Footer } from './modules/Footer';
import { Upcoming } from './modules/Upcoming';
import styles from './App.module.scss';
import './vendor/benzin/benzin.css';

import './index.scss';
function App() {
  return (
    <>
      <div className={styles.root}>
        <Header />
        <WidgetPlayer />
        <Upcoming />
        <Footer />
      </div>
    </>
  );
}

export default App;
