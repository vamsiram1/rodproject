import React from 'react';
import '../../styles/payment-module-styles/Uniform.css';
import { Button, Box } from "@mui/material";
import { RestoreOutlined } from "@mui/icons-material";
// import tracking from "../assets/ic_round-track-changes.png";
import { useState } from 'react';
 
const Uniform = () => {
  const [formData, setFormData] = useState({
    paidReceiptNo: '',
    prePrintReceiptNo: '',
    notes: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Handle submission logic here
  };
 
  return (
    <div className="uniform-wrapper">
      <div className="uniform-header">
        <div>
          <h2>Uniform Print</h2>
          <p>
            Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
          </p>
        </div>
        <div className="uniform-header-buttons">
          <Button
            variant="contained"
            className="track-btn"
            endIcon={<img src=""alt="Tracking" width="20" height="20" />}
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
 
      <div className="cancellation_form_line"></div>
 
      <div className="uniform-card">
        <form onSubmit={handleSubmit} className="uniform-form">
          <div className="left-column">
            <div className="form-group">
              <label>Paid Receipt No</label>
              <input
                type="text"
                name="paidReceiptNo"
                placeholder="Enter Receipt No"
                value={formData.paidReceiptNo}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Pre Print Receipt No</label>
              <input
                type="text"
                name="prePrintReceiptNo"
                placeholder="Enter Receipt No"
                value={formData.prePrintReceiptNo}
                onChange={handleChange}
              />
            </div>
          </div>
 
          <div className="right-column">
            <div className="form-group">
              <label>Notes</label>
              <textarea
                name="notes"
                placeholder="Enter Your Text Here"
                rows="5"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </div>
 
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{ textTransform: "capitalize", px: 5 }}
            >
              <span style={{ padding: "0 40px" }}>Print</span>
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};
 
export default Uniform