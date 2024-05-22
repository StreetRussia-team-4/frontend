import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@modules/Header';
import { Footer } from '@modules/Footer';
import { HomePage } from './pages';
import { EventsPage } from './pages';
import { DirectionsPage } from './pages';
import { ProjectsPage } from './pages';
import { BlogPage } from './pages';
import { AboutUsPage } from './pages';
import { AddressesPage } from './pages';
import { DepartmentsPage } from './pages';
import { DocumentsPage } from './pages';
import styles from './App.module.scss';
import './vendor/benzin/benzin.css';
import './index.scss';
import { DonationModal, QuestionModal } from './components';

function App() {
  const [isDonModalOpen, setIsDonModalOpen] = useState(false);
  const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);

  return (
    <>
      <div className={styles.root}>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage setIsDonModalOpen={setIsDonModalOpen} />}
            />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/directions" element={<DirectionsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/addresses" element={<AddressesPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
          </Routes>
          <Footer />
          <DonationModal
            isDonModalOpen={isDonModalOpen}
            onClose={() => setIsDonModalOpen(false)}
          />
          <QuestionModal
            onClose={() => setQuestionModalOpen(false)}
            isQuestionModalOpen={isQuestionModalOpen}
          />
        </Router>
      </div>
    </>
  );
}

export default App;
