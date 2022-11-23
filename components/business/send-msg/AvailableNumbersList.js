import React from "react";

import AvailableNumberItem from "./AvailableNumberItem";

import styles from "../../../styles/components/business/send-msg/AvailableNumberList.module.scss";

function AvailableNumbersList() {
    return (
        <div className={styles.container}>
            <div>Available Contacts</div>
            <AvailableNumberItem />
        </div>
    );
}

export default AvailableNumbersList;
