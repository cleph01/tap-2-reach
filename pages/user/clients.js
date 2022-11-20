import React from "react";
import styles from "../../styles/ClientList.module.scss";
import ClientListItem from "../../components/ClientListItem";

import db from "../../utils/db/config";

function clients(props) {
    const { entriesData } = props;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {entriesData.map((client, idx) => (
                    <div key={idx}>
                        <ClientListItem client={client} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const entries = await db
        .collection("customers")
        .orderBy("created", "desc")
        .get();
    const entriesData = entries.docs.map((entry) => ({
        id: entry.id,
        ...entry.data(),
    }));
    return {
        props: { entriesData },
    };
};

export default clients;
