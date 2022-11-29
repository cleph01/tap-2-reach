import { useState, useEffect } from "react";

import {
    collection,
    query,
    orderBy,
    onSnapshot,
    getDocs,
    where,
} from "firebase/firestore";

import ChatSenderItem from "../../components/business/chat-window/ChatSenderItem";
import ChatWindow from "../../components/business/chat-window/ChatWindow";

import styles from "../../styles/ChatsUI.module.scss";

import { db } from "../../utils/db/firebaseConfig.js";

function Chats() {
    const [messages, setMessages] = useState([]);
    const [senderInfo, setSenderInfo] = useState([]);

    const getUniquePhoneNumbers = (arr) => {
        const allCustomerPhoneNumbersArr = arr.map(
            (message) => message.customerPhoneNumber
        );

        const uniqueNumbersSet = new Set(allCustomerPhoneNumbersArr);

        return Array.from(uniqueNumbersSet);
    };

    useEffect(() => {
        const collectionRef = collection(db, "conversation");
        const q = query(collectionRef, orderBy("created", "asc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setMessages(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    sent: doc.data().created.toDate(),
                }))
            );
        });

        return unsubscribe;
    }, []);

    useEffect(
        (async) => {
            const uniqueMessageSenders = getUniquePhoneNumbers(messages);

            console.log("Unique numbers: ", uniqueMessageSenders);
            uniqueMessageSenders.forEach(async (cellPhone) => {
                const q = query(
                    collection(db, "customers"),
                    where("cellNumber", "==", cellPhone)
                );
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    setSenderInfo((prev) => [
                        ...prev,
                        { id: doc.id, ...doc.data() },
                    ]);
                });
            });
        },
        [messages]
    );

    return (
        <div className={styles.container}>
            <div className={styles.sender_list}>
                {senderInfo.map((sender) => (
                    <ChatSenderItem
                        key={sender.id}
                        id={sender.id}
                        sender={sender}
                    />
                ))}
            </div>
            <div className={styles.chat_window}>
                <ChatWindow messages={messages} />
            </div>
        </div>
    );
}

export default Chats;
