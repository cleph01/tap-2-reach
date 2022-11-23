import React from "react";

import Checkbox from "@mui/material/Checkbox";
import styles from "../../../styles/components/business/send-msg/AvailableNumberItem.module.scss";

function AvailableNumberItem() {
    return (
        <div className={styles.container}>
            <div className={styles.checkbox}>
                <Checkbox checked={true} />
            </div>
            <div className={styles.contact_display_wrapper}>
                <div className={styles.name}>Charles Montoya</div>
                <span> - </span>
                <div className={styles.phone}>9143125729</div>
            </div>
        </div>
    );
}

export default AvailableNumberItem;
