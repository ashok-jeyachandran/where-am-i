// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { lazy } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const Dashboard = lazy(() => import('@org/feature-dashboard').then(m => ({default: m.OrgFeatureDashboard})));
const Cricket = lazy(() => import('@org/feature-cricket').then((m => ({default: m.OrgFeatureCricket}))));

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/cricket">My Cricket</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard />
          }
        />
        <Route
          path="/cricket"
          element={
           <Cricket />
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
