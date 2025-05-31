import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import PocketMoney from './pocket-money';
import FeeDetails from './fee-details';
import TransportDetails from './transport-details';
import Refunds from './refunds';
import OtherFeeHeads from './other-fee-hands';


function Navbuttons() {
    

    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "nav-link active" : "nav-link";
    const [selectedYear, setSelectedYear] = useState('2024-2025'); // State for year selection
    const hideMetrics = /other-fee-heads/.test(location.pathname);
    // Sample dynamic data for metrics (replace with API data in production)


    return (
        <div className="student-container">
            {/* Navbar and year-select in a flex row */}
            <div className="nav-and-year-container">
                <nav className="navbar">
                    <div className="nav-links">
                        <Link to="/" className={isActive('/')}>Student Profile</Link>
                        <Link to="/payments" className={isActive('/payments')}>Payments</Link>
                        <Link to="/receipts" className={isActive('/receipts')}>Receipts</Link>
                        <Link to="/transport" className={isActive('/transport')}>Transport</Link>
                        <Link to="/academics" className={isActive('/academics')}>Academics</Link>
                        <Link to="/alerts" className={isActive('/alerts')}>Alerts</Link>
                        <Link to="/history" className={isActive('/history')}>History</Link>
                        <Link to="/room-allotment" className={isActive('/room-allotment')}>Room Allotment</Link>
                    </div>
                </nav>
                <select
                    className="year-select"
                    aria-label="Select academic year"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value="2024-2025">2024-2025</option>
                    <option value="2023-2024">2023-2024</option>
                </select>
            </div>

            {/* Metrics grid below */}
            {!hideMetrics && (
            <div class="metrics-grid">
                {/* <!-- JEE Marks Card --> */}
                <div class="metric-card">
                    <div class="metric-header">
                        <h3>JEE Marks</h3>
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a1 1 0 00-1 1v6a1 1 0 002 0V7a1 1 0 00-1-1zm0 10a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                    </div>
                    <p class="metric-value">489</p>
                    <p class="metric-change positive">+8.6% Up from Section</p>
                </div>

                {/* <!-- Recent Marks Card --> */}
                <div class="metric-card">
                    <div class="metric-header">
                        <h3>Recent Marks</h3>
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2zm0-8h2v6h-2z" />
                        </svg>
                    </div>
                    <p class="metric-value">489</p>
                    <p class="metric-change positive">+8.6% Up from Section</p>
                </div>

                {/* <!-- EMCET Mock Test Card --> */}
                <div class="metric-card">
                    <div class="metric-header">
                        <h3>EMCET Mock Test</h3>
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2zm0-8h2v6h-2z" />
                        </svg>
                    </div>
                    <p class="metric-value">489</p>
                    <p class="metric-change negative">-4.3% Down from Section</p>
                </div>

                {/* <!-- Attendance Card --> */}
                <div class="metric-card">
                    <div class="metric-header">
                        <h3>Attendance</h3>
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2zm0-8h2v6h-2z" />
                        </svg>
                    </div>
                    <p class="metric-value">67%</p>
                    <p class="metric-change negative">-4.3% Down from Section</p>
                </div>
            </div>
            )}


            {/* <!-- student-info.html --> */}
            <div class="student-info-container">
                <div class="student-header">
                    <div class="header-left">
                        <img src="/icons/info-icon.svg" alt="Info Icon" class="info-icon" />
                        <div>
                            <h2 className="stu-info">Student Information</h2>
                            <p className="stu-info-sub-para">Get All Student Details Regarding Fee Payment, Transport, Pocket Money, Other Fee Heads</p>
                        </div>
                    </div>
                    <select class="year-dropdown">
                        <option>Inter 2</option>
                        <option>Inter 1</option>
                    </select>
                </div>

                <nav class="tab-nav">
                    <Link to="/fee-details" className="tab" active-class="active-tab">Fee Details</Link>
                    <Link to="/pocket-money" className="tab" active-class="active-tab">Pocket Money</Link>
                    <Link to="/transport-details" className="tab" active-class="active-tab">Transport Details</Link>
                    <Link to="/refunds" className="tab" active-class="active-tab">Refunds</Link>
                    <Link to="/other-fee-heads" className="tab" active-class="active-tab">Other Fee Heads</Link>
                </nav>





                <Routes>
                    <Route path="fee-details" element={<FeeDetails />} />
                    <Route path="pocket-money" element={<PocketMoney/>} />
                    <Route path="/transport-details" element={<TransportDetails />} />
                    <Route path="/refunds" element={<Refunds/>} />
                    <Route path="/other-fee-heads" element={<OtherFeeHeads />} />
                    {/* <Route path="*" element={<FeeDetails />} /> */}
                </Routes>

             


            </div>





        </div>
    );
}

export default Navbuttons;