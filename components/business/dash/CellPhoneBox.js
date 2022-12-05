import React from "react";

import styles from "../../../styles/components/business/dashboard/CellPhoneBox.module.scss";
function CellPhoneBox({ optionName, emoji }) {
    return (
        <div className={styles.container}>
            <div className={styles.screen_wrapper}>
                <div className={`${styles.mine} ${styles.messages}`}>
                    <div className={styles.message}>bla</div>
                    <div className={`${styles.message} ${styles.last}`}>
                        Send a Message
                    </div>
                </div>
            </div>
            <div className={styles.iphone_button}></div>
        </div>
    );
}

export default CellPhoneBox;
