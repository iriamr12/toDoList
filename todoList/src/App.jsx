import { Routes, Route } from 'react-router-dom';
import ForTomorrow from './components/DueTomorrow/ForTomorrow';
import Month from './components/Month';
import Today from './components/Today/Today';
import Week from './components/Week/Week';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/today" element={<Today />} />
        <Route path="/week" element={<Week />} />
        <Route path="/month" element={<Month />} />
        <Route path="/forTomorrow" element={<ForTomorrow />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
