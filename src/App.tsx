import { WidgetPlayer } from './components';
import { Header } from './modules/Header';
import { Footer } from './modules/Footer';
import { Upcoming } from './modules/Upcoming';
import { Slider } from './modules/Slider';
import { cards } from './utils/constants';
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
        <Slider cards={cards} />
        <Footer />
      </div>
    </>
  );
}

export default App;
