
import './App.css';
import Headerpart from './components/header';
import SideBar from './components/sidebar';

import StudentModule from './components/student-module-component/student-module';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentProfileRight from './components/student-profile-right/studentprofile-right';

function App() {
  return (
    <>
      <Headerpart />
      <div classsName="main_body" id='body_main'>
        <div className='side'>
          <SideBar />
        </div>
        <div className='main'>
          <div className='main_left_side'>
<BrowserRouter>

            <Routes>

              <Route path="/student/*" element={<StudentModule/>} />
              {/* <Route path="/payments" element={<Payments />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/history" element={<History />} />
            <Route path="/room-allotment" element={<RoomAllotment />} /> */}
            </Routes>

          </BrowserRouter>
          </div>
          
          <div className='main_side_right'>
           <StudentProfileRight/>
          </div>
          
        </div>

         
          
        
      </div>
    </>
  );
}

export default App;
