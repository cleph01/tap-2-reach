import React from "react";

import styles from "../../../styles/components/business/chat/ChannelInfo.module.scss";

function ChannelInfo() {
    return (
        <div className={styles.ChannelInfo}>
            <div className={styles.Topic}>
                Topic:{" "}
                <input className={styles.TopicInput} value="Awesome stuff" />
            </div>
            <div className={styles.ChannelName}>#general</div>
        </div>
    );
}

export default ChannelInfo;
