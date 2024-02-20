import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from '../components/common/Spinner';
const Home = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const DashBoardPage = lazy(() => import('../pages/DashBordPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPages'));
const MyAdsPage = lazy(() => import('../pages/MyAdsPage'));
const MyAccountPage = lazy(() => import('../pages/MyAccountPage'));
const MySubscriptionsPage = lazy(() => import('../pages/MySubscriptionsPage'));
const  MyMessagesPage = lazy(() => import('../pages/MyMessagesPage'));
const  SettingsPage = lazy(() => import('../pages/SettingsPage'));
const  ScheduledLessonsPage = lazy(() => import('../pages/ScheduledLessonsPage'));
const  MyStudentsPage = lazy(() => import('../pages/MyStudentsPage'));
const  ProfilePage = lazy(() => import('../pages/ProfilePage'));

const LinkRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Suspense fallback={<Spinner/>}><Home /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<Spinner/>}><LoginPage /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<Spinner/>}><RegisterPage /></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={<Spinner/>}><DashBoardPage /></Suspense>} />
        <Route path="/dashboard/reviews" element={<Suspense fallback={<Spinner/>}><ReviewsPage /></Suspense>} />
        <Route path="/dashboard/my-ads" element={<Suspense fallback={<Spinner/>}><MyAdsPage /></Suspense>} />
        <Route path="/dashboard/my-account" element={<Suspense fallback={<Spinner/>}><MyAccountPage /></Suspense>} />
        <Route path="/dashboard/my-messages" element={<Suspense fallback={<>Loading...</>}><MyMessagesPage /></Suspense>} />
        <Route path="/dashboard/my-subscriptions" element={<Suspense fallback={<>Loading...</>}><MySubscriptionsPage /></Suspense>} />
        <Route path="/dashboard/settings" element={<Suspense fallback={<>Loading...</>}><SettingsPage /></Suspense>} />
        <Route path="/dashboard/scheduled-lessons" element={<Suspense fallback={<>Loading...</>}><ScheduledLessonsPage /></Suspense>} />
        <Route path="/dashboard/my-students" element={<Suspense fallback={<>Loading...</>}><MyStudentsPage /></Suspense>} />
        <Route path="/dashboard/profile" element={<Suspense fallback={<>Loading...</>}><ProfilePage /></Suspense>} />
      </Routes>
  );
};

export default LinkRoutes;
