import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './vendor/benzin/benzin.css';

import './global.scss';

import { CardData, Event, Project } from './type/type';

import { Header } from '@modules/Header';
import { Footer } from '@modules/Footer';
import { CurrentProjectsPage, HomePage } from './pages';
import { EventsPage } from './pages';
import { DirectionsPage } from './pages';
import { ProjectsPage } from './pages';
import { BlogPage } from './pages';
import { AboutUsPage } from './pages';
import { AddressesPage } from './pages';
import { DepartmentsPage } from './pages';
import { DocumentsPage } from './pages';
import { ProjectDetailPage } from './pages';

import { CardEventData, DonationModal, QuestionModal } from './components';

import { fetchProjects, fetchEvents } from './utils/api';
import { cardsForEvents, cardsForProjets } from './utils/constants';

function App() {
  const [isDonModalOpen, setIsDonModalOpen] = useState(false);
  const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
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
          current_status: project.current_status,
          image: project.preview,
          title: project.name,
          location: project.region.name,
          description: project.description,
          startDate: project.start_date,
          endDate: project.end_date,
          fundsRaised: project.funds_raised,
          goal: project.goal,
        }))
      : cardsForProjets;

  const eventsToRender: CardEventData[] =
    events.length > 0
      ? events.map(event => ({
          id: event.id,
          image: event.preview,
          title: event.name,
          location: event.region.name,
          description: event.description,
          startDate: event.start_date,
          endDate: event.end_date,
          direction: event.direction,
        }))
      : cardsForEvents;

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error('Ошибка загрузки данных:', error);
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                eventsToRender={eventsToRender}
                projectsToRender={projectsToRender}
                setIsDonModalOpen={setIsDonModalOpen}
              />
            }
          />
          <Route
            path="/events"
            element={<EventsPage eventsToRender={eventsToRender} />}
          />
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
          <Route
            path="/projects/current"
            element={
              <CurrentProjectsPage
                setIsDonModalOpen={setIsDonModalOpen}
                projectsToRender={projectsToRender}
              />
            }
          />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
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
    </>
  );
}

export default App;
