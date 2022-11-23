import React from "react";

import styles from "../../styles/Dash.module.scss";

function dash() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>Total Contacts</div>
                <div>Google Reviews Received</div>
                <div>Go to Conversations</div>
                <div>Customer SMS Catergories</div>
                <div>Schedule Reminder Text</div>
                <div>Opt Outs</div>
                
            </div>
        </div>
    );
}

export default dash;
