import "../../styles/student-component-styles/transport-details.css";
function TransportDetails() {
    return (

        <div>
            <div class="transport-container">
                <div class="transport-info">
                    <div class="transport-row">
                        <p>Academic Year</p>
                        <span>2014-2015</span>
                    </div>
                    <div class="transport-row">
                        <p>Transport Type</p>
                        <span>Addanki - Miyapur</span>
                    </div>
                    <div class="transport-row">
                        <p>Transport Status</p>
                        <span>Assigned</span>
                    </div>
                    <div class="transport-row">
                        <p>Stage</p>
                        <span>Addanki</span>
                    </div>

                </div>

                <div class="transport-visual">
                    {/* <div class="route-circle">
                        <span class="route-icon">🚍</span>
                        <p class="route-number">Route No<br /><strong>7</strong></p>
                    </div>
                    <div class="route-path">
                        <p class="stop">Addanki</p>
                        <div class="line"></div>
                        <p class="stop">Miyapur</p>
                    </div> */}
                </div>


            </div>

            <div className="manage-button-container">
                <button class="manage-button">+ Manage Transport</button>
            </div>
        </div>
    );
}

export default TransportDetails;