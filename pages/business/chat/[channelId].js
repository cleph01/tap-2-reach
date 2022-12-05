import React from "react";
import Channel from "../../../components/business/chat-window/Channel";
import Nav from "../../../components/business/chat-window/Nav";

import { useRouter } from "next/router";

import styles from "../../../styles/Chat.module.scss";

function Chat() {
    const router = useRouter();
    const { channelId } = router.query;

    console.log("Channelid at []: ", channelId);
    return (
        <div className={styles.Chat}>
            <Nav channelId={channelId} />
            <Channel channelId={channelId} />
        </div>
    );
}

export default Chat;
