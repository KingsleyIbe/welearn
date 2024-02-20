import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
  // import Home from '../pages/HomePage';
// import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashBoardPage from '../pages/DashBordPage';
import ReviewsPage from '../pages/ReviewsPages';
import MyAdsPage from '../pages/MyAdsPage';
import MyAccountPage from '../pages/MyAccountPage';
import MySubscriptionsPage from '../pages/MySubscriptionsPage';
import MyMessagesPage from '../pages/MyMessagesPage';
import SettingsPage from '../pages/SettingsPage';
import ScheduledLessonsPage from '../pages/ScheduledLessonsPage';
import MyStudentsPage from '../pages/MyStudentsPage';
import ProfilePage from '../pages/ProfilePage';

const LinkRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Suspense fallback={<>Loading...</>}><Home /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<>Loading...</>}><LoginPage /></Suspense>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/dashboard/reviews" element={<ReviewsPage />} />
        <Route path="/dashboard/my-ads" element={<MyAdsPage />} />
        <Route path="/dashboard/my-account" element={<MyAccountPage />} />
        <Route path="/dashboard/my-messages" element={<MyMessagesPage />} />
        <Route path="/dashboard/my-subscriptions" element={<MySubscriptionsPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        <Route path="/dashboard/scheduled-lessons" element={<ScheduledLessonsPage />} />
        <Route path="/dashboard/my-students" element={<MyStudentsPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
      </Routes>
  );
};

export default LinkRoutes;
