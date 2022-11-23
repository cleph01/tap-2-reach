import React from "react";

import SelectedNumberItem from "./SelectedNumberItem";

import styles from "../../../styles/components/business/send-msg/SelectedNumbersList.module.scss";

function SelectedNumbersList() {
    return (
        <div className={styles.container}>
            <div>Selected Numbers</div>
            <SelectedNumberItem />
        </div>
    );
}

export default SelectedNumbersList;
