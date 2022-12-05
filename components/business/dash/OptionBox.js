import React from "react";

import styles from "../../../styles/components/business/dashboard/OptionBox.module.scss";
function OptionBox({ optionName, emoji }) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>{optionName}</div>
                <div>{emoji}</div>
            </div>
        </div>
    );
}

export default OptionBox;
