import { useState, useEffect } from "react";
import {
    collection,
    addDoc,
    Timestamp,
    query,
    orderBy,
    onSnapshot,
    getDocs,
    where,
} from "firebase/firestore";

import styles from "../../../styles/components/business/chat/ChatWindow.module.scss";
import MessageItem from "./MessageItem";

import { db } from "../../../utils/db/firebaseConfig";

function ChatWindow({ messages, selectedSender }) {
    const [message, setMessage] = useState("");
    const [showMessages, setShowMessages] = useState([]);

    useEffect(() => {
        const result = messages.filter((message) => {
            console.log("Meesage: ", message);

            return message.customerPhoneNumber === selectedSender.cellNumber;
        });

        setShowMessages(result);
    }, [messages, selectedSender]);

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
                    to: selectedSender.cellNumber,
                    from: "+19144001284",
                    body: message,
                }
            );

            if (docRef.id) {
                const convoRef = await addDoc(collection(db, "conversation"), {
                    businessTwilioNumber: "+19144001284",
                    customerPhoneNumber: selectedSender.cellNumber,
                    body: message,
                    direction: "out",
                    created: Timestamp.fromDate(new Date()),
                });

                setMessage("");

                console.log("Document written with ID: ", docRef.id);
            }
        } else {
            alert("Empty Message");
        }
    };

    return (
        <div className={styles.container}>
            <pre>{JSON.stringify(selectedSender)}</pre>
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
                    value={message}
                    onChange={onChange}
                />
                <button onClick={onSubmit}>send</button>
            </div>
        </div>
    );
}

export default ChatWindow;
