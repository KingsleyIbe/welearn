import { Routes, Route } from 'react-router-dom';
  import Home from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashBoardPage from '../pages/DashBordPage';
import ReviewsPage from '../pages/ReviewsPages';
import MyAdsPage from '../pages/MyAdsPage';
import MyAccountPage from '../pages/MyAccountPage';
import MySubscriptionsPage from '../pages/MySubscriptionsPage';
import MyMessagesPage from '../pages/MyMessagesPage';

const LinkRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/dashboard/rewiews" element={<ReviewsPage />} />
        <Route path="/dashboard/my-ads" element={<MyAdsPage />} />
        <Route path="/dashboard/my-account" element={<MyAccountPage />} />
        <Route path="/dashboard/my-messages" element={<MyMessagesPage />} />
        <Route path="/dashboard/my-subscriptions" element={<MySubscriptionsPage />} />
      </Routes>
  );
};

export default LinkRoutes;
