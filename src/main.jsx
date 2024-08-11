import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import EventTrackerHOC from './components/Eventtrack/hoc';
import App from './App';
import './index.css';

function ErrorBoundary({ children }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {children}
    </React.Suspense>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <EventTrackerHOC>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </EventTrackerHOC>
    </Router>
  </React.StrictMode>
);
