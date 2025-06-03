import React from 'react';
import '../../styles/payment-module-styles/Transfers.css';
import { Button, Box } from "@mui/material";
import { RestoreOutlined } from "@mui/icons-material";
// import tracking from "../assets/ic_round-track-changes.png";
import { Field } from 'formik';

const Transfers = () => {
    return (
        <div className="transfers-wrapper">
            <div className="transfers-header">
                <div>
                    <h2>Transfers</h2>
                    <p>
                        Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
                    </p>
                </div>
                <div className="transfers-header-buttons">
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
            <div className="transfers_form_line"></div>
            <div className="transfers-card">
                <div className="transfers-form">
                    <div className="left-column">
                        <div className="form-group">
                            <label>Transfer Type</label>
                           <select as="select" name="concession amount" className="form-input">
                                                                   <option value="">Select</option>
                                                                   <option value="option1">Option 1</option>
                                                                   <option value="option2">Option 2</option>
                                                               </select>
                        </div>
                        <div className="form-group">
                            <label>Pre Print Receipt No</label>
                            <input type="text" placeholder="Enter Receipt No" />
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="form-group">
                            <label>Notes</label>
                            <textarea placeholder="Enter Your Text Here" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Button
                        variant="contained"
                        size='large'
                        type="submit"
                        color="primary"
                        sx={{ textTransform: "capitalize", px: 5 }}
                    >
                        <span style={{ padding: "0 40px" }}>Print</span>
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default Transfers;