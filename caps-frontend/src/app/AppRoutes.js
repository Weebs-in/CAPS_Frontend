import React, { Component,Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const LoginAdmin = lazy(() => import('./user-admin/LoginAdmin'));
const LoginLecturer = lazy(() => import('./user-lecturer/LoginLecturer'));
const LoginStudent = lazy(() => import('./user-student/LoginStudent'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/basic-ui/buttons" element={<Buttons />} />
          <Route path="/basic-ui/dropdowns" element={<Dropdowns />} />
          <Route path="/basic-ui/typography" element={<Typography />} />

          <Route path="/form-Elements/basic-elements" element={<BasicElements />} />

          <Route path="/tables/basic-table" element={<BasicTable />} />

          <Route path="/icons/mdi" element={<Mdi />} />

          <Route path="/charts/chart-js" element={<ChartJs />} />


          <Route path="/user-admin/login-admin" element={<LoginAdmin />} />
          <Route path="/user-lecturer/login-lecturer" element={<LoginLecturer />} />
          <Route path="/user-student/login-student" element={<LoginStudent />} />

          <Route path="/error-pages/error-404" element={<Error404 />} />
          <Route path="/error-pages/error-500" element={<Error500 />} />


          <Navigate to="/dashboard" />
        </Routes>
      </Suspense>
    );
  }
}

export default AppRoutes;