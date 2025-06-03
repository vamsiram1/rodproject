import './App.css';
import Headerpart from './components/header';
import SideBar from './components/sidebar';
import StudentModule from './components/student-module-component/student-module';
// import PaymentModule from './components/payment-module/payment-module';

import StudentProfileRight from './components/student-profile-right/studentprofile-right';
// import PaymentProfileRight from './components/payment-profile-right/payment-profile-right';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavButtons from './components/student-module-component/nav-buttons';
import FeePaymentForm from './components/payments-module-component/payments';
import MainScreen from './components/payments-module-component/payments-screen';

function App() {
  return (
    <BrowserRouter>
      <Headerpart />
      <div className="main_body" id='body_main'>
        <div className='side'>
          <SideBar />
        </div>
        <div className='main'>
          <div className='main_left_side'>
            <NavButtons />
            <Routes>
              <Route path="/student/*" element={<StudentModule />} />
              <Route path="/*" element={<MainScreen/>} />
              {/* Add more routes here */}
            </Routes>
          </div>

          <div className='main_side_right'>
            <Routes>
              <Route path="/student/*" element={<StudentProfileRight />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
