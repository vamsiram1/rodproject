
import './App.css';

import Navbuttons from './components/student-module';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
            <Route path="/student/*" element={<Navbuttons />} />
            {/* <Route path="/payments" element={<Payments />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/history" element={<History />} />
            <Route path="/room-allotment" element={<RoomAllotment />} /> */}
          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
