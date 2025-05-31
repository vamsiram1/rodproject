import "../styles/pocket-money.css";


import srichai from "../assets/srichai.png";
import srichai2 from "../assets/srichai2.png";
function PocketMoney() {
    return (
        <div className="pocketmoney-container">
            <div className="pocketmoney-info-section">
                <div className="pocketmoney-info">
                    <p>Pocket Refund</p>
                    <span>0</span>
                </div>
                <div className="pocketmoney-info">
                    <p>Deposited Amount</p>
                    <span>7,000</span>
                </div>
                <div className="pocketmoney-info">
                    <p>Taken Amount</p>
                    <span>5,492</span>
                </div>
                {/* Move the button here */}

            </div>

            <button className="pocketmoney-add-money">+ Add Money</button>

            <div className="pocketmoney-card">
                <div className="pocketmoney-card-content">
                    <p className="pocketmoney-admission">Admission No<br /><strong>123456765432</strong></p>
                    <p className="pocketmoney-name">Yaswanth Bhimineni<br /><span className="label">Student Name</span></p>
                    <div className="pocketmoney-balance-container">
                    <p className="pocketmoney-balance-label">Balance</p>
                    <p className="pocketmoney-balance">2,000</p>
                    </div>

                    
                </div>
                <div className="pocketmoney-card-footer">
                        <img src={srichai} alt="student" className="pocketmoney-emoji" />
                        <img src={srichai2} alt="student" className="pocketmoney-emoji" />
                </div>

            </div>




        </div>
    );
}

export default PocketMoney;
