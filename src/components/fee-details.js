import "../styles/fee-details.css"
function FeeDetails() {
    return (
        <div>
            <div class="fee-summary-container">
                <div class="fee-details">
                    <div class="fee-row"><span>Course Fee</span><span>145,000</span></div>
                    <div class="fee-row"><span>Add’l Amount</span><span>2,500</span></div>
                    <div class="fee-row"><span>Concession</span><span>40,000</span></div>
                    <div class="fee-row"><span>Net Fee</span><span>122,500</span></div>
                    <div class="fee-row"><span>Service Tax Paid</span><span>0</span></div>
                </div>

                <div class="fee-details">
                    <div class="fee-row"><span>Fee Paid</span><span>122,500</span></div>
                    <div class="fee-row"><span>Fee Deduction</span><span>0</span></div>
                    <div class="fee-row"><span>Fee Refund</span><span>0</span></div>
                    <div class="fee-row"><span>Over All Due</span><span>0</span></div>
                    <div class="fee-row"><span>Service Tax To Be Paid</span><span>0</span></div>
                </div>

                <div class="fee-circle-status">
                    <div class="circle">
                        <div class="circle-inner">
                            <span class="term-label">Term 1</span>
                            <span class="amount">46,000</span>
                            <span class="status unpaid">Unpaid</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="payment-button-container">
                <button class="pay-button">+ Proceed to Payment</button>
            </div>
        </div>
    );
}

export default FeeDetails;

