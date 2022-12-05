import React from "react";
import Members from "./Members";
import ChannelInfo from "./ChannelInfo";
import Messages from "./Messages";
import ChatInputBox from "./ChatInputBox";

import styles from "../../../styles/components/business/chat/Channel.module.scss";

function Channel({ channelId }) {
    return (
        <div className={styles.Channel}>
            <div className={styles.ChannelMain}>
                <ChannelInfo />
                <Messages channelId={channelId} />
                <ChatInputBox />
            </div>
            <Members />
        </div>
    );
}

export default Channel;
