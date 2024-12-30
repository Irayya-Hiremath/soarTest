import React, { Suspense, useState, useEffect, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import DefaultLayout from './layout/DefaultLayout';
const Home = lazy(() => import('./pages/home'));
const Transactions = lazy(() => import('./pages/transactions'));
const Accounts = lazy(() => import('./pages/accounts'));
const Investments = lazy(() => import('./pages/investments'));
const CreditCards = lazy(() => import('./pages/creditcards'));
const Settings = lazy(() => import('./pages/settings'));
const Loans = lazy(() => import('./pages/loans'));
const Services = lazy(() => import('./pages/services'));
const Privileges = lazy(() => import('./pages/Privileges'));
function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <>
                <PageTitle title="Dashboard" />
                <Home />
              </>
            }
          />
          <Route
            path="/transactions"
            element={
              <>
                <PageTitle title="Transactions" />
                <Transactions />
              </>
            }
          />
          <Route
            path="/accounts"
            element={
              <>
                <PageTitle title="Accounts" />
                <Accounts />
              </>
            }
          />

          <Route
            path="/investments"
            element={
              <>
                <PageTitle title="Investments" />
                <Investments />
              </>
            }
          />

          <Route
            path="/creditcards"
            element={
              <>
                <PageTitle title="Credit cards" />
                <CreditCards />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings" />
                <Settings />
              </>
            }
          />
          <Route
            path="/loans"
            element={
              <>
                <PageTitle title="Loans" />
                <Loans />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <PageTitle title="services" />
                <Services />
              </>
            }
          />
          <Route
            path="/privileges"
            element={
              <>
                <PageTitle title="privilages" />
                <Privileges />
              </>
            }
          />
          
        </Routes>
      </Suspense>
    </DefaultLayout>
  );
}

export default App;