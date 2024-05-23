import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import './vendor/benzin/benzin.css';
import './global.scss';

import { Project } from './type/type';

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
import { CardData, DonationModal, QuestionModal } from './components';
import { fetchProjects, fetchEvents } from './utils/api';
import { cardsForEvents, cardsForSlider } from './utils/constants';

function App() {
  const [isDonModalOpen, setIsDonModalOpen] = useState(false);
  const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [events, setEvents] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, eventsData] = await Promise.all([
          fetchProjects(),
          fetchEvents(),
        ]);
        console.log('projects:', projectsData);
        console.log('events:', eventsData);
        setProjects(projectsData);
        setEvents(eventsData);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const projectsToRender: CardData[] =
    projects.length > 0
      ? projects.map(project => ({
          id: project.id,
          image: project.preview,
          title: project.name,
          location: project.region.name,
          description: project.description,
          startDate: project.start_date,
          endDate: project.end_date,
          fundsRaised: project.funds_raised,
          goal: project.goal,
        }))
      : cardsForSlider;

  console.log('projectsToRender: ', projectsToRender);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const eventsToRender: CardData[] =
    events.length > 0
      ? events.map(event => ({
          id: event.id,
          image: event.preview,
          title: event.name,
          location: event.region.name,
          description: event.description,
          startDate: event.start_date,
          endDate: event.end_date,
          fundsRaised: event.funds_raised,
          goal: event.goal,
        }))
      : cardsForEvents;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className={styles.root}>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  projectsToRender={projectsToRender}
                  setIsDonModalOpen={setIsDonModalOpen}
                />
              }
            />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/directions" element={<DirectionsPage />} />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  setIsDonModalOpen={setIsDonModalOpen}
                  projectsToRender={projectsToRender}
                />
              }
            />
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
