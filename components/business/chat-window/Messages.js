import { useEffect } from "react";
import useCollection from "../../../custom-hooks/useCollection";
import useDoc from "../../../custom-hooks/useDoc";

import styles from "../../../styles/components/business/chat/Messages.module.scss";

function Messages({ channelId }) {
    const messages = useCollection(
        `channels/${channelId}/messages`,
        "createdOn"
    );
    console.log("Channel ID: ", channelId);
    console.log("Messages: ", messages);
    return (
        <div className={styles.Messages}>
            <div className={styles.EndOfMessages}>
                That&apos;s every message!
            </div>
            {messages?.map((message, index) => {
                const previous = messages[index - 1];
                const showDay = false;
                const showAvatar =
                    !previous || message.customer.id !== previous.customer.id;
                return showAvatar ? (
                    <FirstMessageFromUser message={message} />
                ) : (
                    <div key={index}>
                        <div className={`${styles.Message} ${styles.noAvatar}`}>
                            <div className={styles.MessageContent}>
                                {message.text}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const FirstMessageFromUser = ({ message, showDay }) => {
    const author = useDoc(message.customer.path);
    return (
        <div key={message.id}>
            {showDay && (
                <div className={styles.Day}>
                    <div className={styles.DayLine} />
                    <div className={styles.DayText}>12/6/2018</div>
                    <div className={styles.DayLine} />
                </div>
            )}
            <div className={`${styles.Message} ${styles.withAvatar}`}>
                <div className={styles.Avatar} />
                <div className={styles.Author}>
                    <div>
                        <span className={styles.UserName}>
                            {author && author.displayName}{" "}
                        </span>
                        <span className={styles.TimeStamp}>
                            {/* {message.createdOn.toDate()} */}
                        </span>
                    </div>
                    <div className={styles.MessageContent}>{message.text}</div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
