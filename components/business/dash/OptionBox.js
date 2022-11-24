import React from "react";

import styles from "../../../styles/components/business/dash/OptionBox.module.scss";
function OptionBox({ optionName, emoji }) {
    return (
        <div className={styles.container}>
            <div className={style.wrapper}>
                <div>{optionName}</div>
                <div>{emoji}</div>
            </div>
        </div>
    );
}

export default OptionBox;
