import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import styles from "../../../styles/components/business/send-msg/SelectedNumberItem.module.scss";

function SelectedNumberItem() {
    return (
        <div className={styles.container}>
            <div className={styles.checkbox}>
                <CloseIcon />
            </div>
            <div className={styles.contact_display_wrapper}>
                <div className={styles.name}>Charles Montoya</div>
                <span> - </span>
                <div className={styles.phone}>9143125729</div>
            </div>
        </div>
    );
}

export default SelectedNumberItem;
