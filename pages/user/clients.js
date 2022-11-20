import React from "react";
import styles from "../../styles/ClientList.module.scss";
import ClientListItem from "../../components/ClientListItem";

function clients() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ClientListItem />
            </div>
        </div>
    );
}

export default clients;
