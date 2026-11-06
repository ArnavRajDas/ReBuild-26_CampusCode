import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx';
import Events from './pages/Events/Events.jsx';
import MyEvents from './pages/MyEvents/MyEvents.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import CursorGlow from './components/motion/CursorGlow.jsx';

const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

const PAGE_FADE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.28, ease: [0.22, 0.61, 0.36, 1] },
};

export default function App() {
  const location = useLocation();

  return (
    <>
      <CursorGlow />
      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <motion.div className="page-transition" key={location.pathname} {...PAGE_FADE}>
          <Routes location={location}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/student" element={<StudentDashboard />} />
              <Route path="/student/events" element={<Events />} />
              <Route path="/student/my-events" element={<MyEvents />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
