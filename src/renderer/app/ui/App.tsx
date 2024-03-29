import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/Main/MainPage';
import { Provider } from 'react-redux';
import './App.css';
import { store } from '../store';

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}
