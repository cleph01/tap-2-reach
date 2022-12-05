import React from "react";

import styles from "../../../styles/components/business/chat/Members.module.scss";

function Members() {
    return (
        <div className={styles.Members}>
            <div>
                <div className={styles.Member}>
                    <div
                        className={`${styles.MemberStatus} ${styles.offline}`}
                    />
                    Ryan Florence
                </div>
                <div className={styles.Member}>
                    <div
                        className={`${styles.MemberStatus} ${styles.online}`}
                    />
                    cleverbot
                </div>
            </div>
        </div>
    );
}

export default Members;
