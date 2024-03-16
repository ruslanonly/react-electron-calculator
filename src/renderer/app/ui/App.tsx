import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/Main/MainPage';

import './App.css';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
