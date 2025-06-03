import '../../styles/payment-module-styles/AkashBooks.css';
import { Button, Box } from "@mui/material";
import { RestoreOutlined } from "@mui/icons-material";
// import tracking from "../assets/ic_round-track-changes.png"

const AkashBooks = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const values = {
            paymentStatus: formData.get('paymentStatus'),
            paidReceiptNo: formData.get('paidReceiptNo'),
            prePrintReceiptNo: formData.get('prePrintReceiptNo'),
            bookClass: formData.get('bookClass'),
            notes: formData.get('notes'),
        };
        console.log('Form Values:', values);
    };

    return (
        <>
            <div className="akash-books-container">
                <div className="header-section">
                    <h2 className="title">Akash Books</h2>
                    <div className="top-buttons">
                        <Button
                            variant="contained"
                            className="track-btn"
                            endIcon={<img src="" alt="Tracking" width="20" height="20" />}
                            sx={{
                                textTransform: 'capitalize',
                                backgroundColor: '#1976d2',
                                '&:hover': {
                                    backgroundColor: '#115293',
                                },
                            }}
                        >
                            Tracking
                        </Button>
                        <Button
                            variant="outlined"
                            color="gray"
                            endIcon={<RestoreOutlined />}
                            size="small"
                            sx={{
                                textTransform: "capitalize",
                                width: "120px",
                                height: "36px",
                                '& .MuiButton-startIcon': {
                                    marginRight: '4px',
                                    marginLeft: '8px',
                                },
                            }}
                            onClick={() => alert("History Clicked")}
                        >
                            History
                        </Button>
                    </div>
                </div>

                <p className="subtitle">
                    Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
                </p>
                <div className="cancellation_form_line" ></div>
                <form className="form-card" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="paymentStatus">Payment Status</label>
                                <select name="paymentStatus" id="paymentStatus">
                                    <option value="">Select Status</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Unpaid">Unpaid</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="paidReceiptNo">Paid Receipt No</label>
                                <input
                                    type="text"
                                    name="paidReceiptNo"
                                    id="paidReceiptNo"
                                    placeholder="ENTER RECEIPT NO"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="prePrintReceiptNo">Pre Print Receipt No</label>
                                <input
                                    type="text"
                                    name="prePrintReceiptNo"
                                    id="prePrintReceiptNo"
                                    placeholder="ENTER RECEIPT NO"
                                />
                            </div>
                        </div>

                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="bookClass">Books for Class</label>
                                <select name="bookClass" id="bookClass">
                                    <option value="Sr Intermediate" selected>Sr Intermediate</option>
                                    <option value="Jr Intermediate">Jr Intermediate</option>
                                    <option value="High School">High School</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="notes">Notes</label>
                                <textarea
                                    name="notes"
                                    id="notes"
                                    rows="4"
                                    placeholder="ENTER YOUR TEXT HERE"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="print-button">
                        <button type="submit" className="print-blue">Print</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AkashBooks;