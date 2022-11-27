import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import styles from "../../../styles/components/business/chat/ChatWindow.module.scss";
import MessageItem from "./MessageItem";
import { db } from "../../../utils/db/firebaseConfig";

function ChatWindow({ messages }) {
    const [message, setMessage] = useState("");

    const onChange = (e) => {
        e.preventDefault();

        setMessage(e.target.value);
    };

    const onSubmit = async () => {
        // Add a new document with a generated id.
        if (message !== "") {
            const docRef = await addDoc(
                collection(db, "outgoingTextMessages"),
                {
                    to: "9143125729",
                    from: "9144001284",
                    body: message,
                }
            );

            if (docRef.id) {
                const convoRef = await addDoc(collection(db, "conversation"), {
                    businessTwilioNumber: "9144008584",
                    customerPhoneNumber: "9143125729",
                    body: message,
                    direction: "out",
                    created: Timestamp.fromDate(new Date()),
                });
            }
            console.log("Document written with ID: ", docRef.id);
        }
    };

    return (
        <div className={styles.container}>
            <pre>{JSON.stringify(message)}</pre>
            <div className={styles.messages}>
                {messages.map((message) => (
                    <MessageItem
                        key={message.id}
                        id={message.id}
                        message={message}
                    />
                ))}
            </div>
            <div className={styles.chat_input_wrapper}>
                <input
                    className={styles.chat_input}
                    type="text"
                    onChange={onChange}
                />
                <button onClick={onSubmit}>send</button>
            </div>
        </div>
    );
}

export default ChatWindow;
