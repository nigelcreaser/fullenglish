import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import CheckIn from './pages/CheckIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/checkin" element={<CheckIn />} />
      </Routes>
    </Router>
  );
}

export default App;
