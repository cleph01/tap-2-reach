import { useState, useEffect, useCallback } from "react";

import {
    collection,
    query,
    orderBy,
    onSnapshot,
    getDocs,
    where,
    Timestamp,
} from "firebase/firestore";

import ChatSenderItem from "../../components/business/chat-window/ChatSenderItem";
import ChatWindow from "../../components/business/chat-window/ChatWindow";

import styles from "../../styles/ChatsUI.module.scss";

import { db } from "../../utils/db/firebaseConfig.js";

function Chats() {
    const [senderInfo, setSenderInfo] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedSender, setSelectedSender] = useState({
        id: "R6O1CPHACsmjvjWxzaFN",
        cellNumber: "+19143125729",
        created: Timestamp.fromDate(new Date()),
        email: "charlesmontoya79@gmail.com",
        firstName: "Charles",
        lastName: "Montoya",
    });

    const getUniquePhoneNumbers = (arr) => {
        const allCustomerPhoneNumbersArr = arr.map(
            (message) => message.customerPhoneNumber
        );

        const uniqueNumbersSet = new Set(allCustomerPhoneNumbersArr);

        return Array.from(uniqueNumbersSet);
    };

    useEffect(() => {
        const collectionRef = collection(db, "conversation");
        const q = query(
            collectionRef,
            where("businessTwilioNumber", "==", "+19144001284"),
            orderBy("created", "asc")
        );

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

    useEffect(() => {
        const uniqueMessageSenders = getUniquePhoneNumbers(messages);

        console.log("Unique numbers: ", uniqueMessageSenders);

        uniqueMessageSenders.forEach(async (cellPhone) => {
            const q = query(
                collection(db, "customers"),
                where("cellNumber", "==", cellPhone)
            );
            const querySnapshot = await getDocs(q);

            console.log("Sender Snapshot", querySnapshot.docs[0].data());

            setSenderInfo((prev) => [
                ...prev,
                ...querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })),
            ]);
        });
    }, [messages]);

    console.log("Sender Info: ", senderInfo);

    return (
        <div className={styles.container}>
            <div className={styles.sender_list}>
                {senderInfo?.map((sender) => (
                    <ChatSenderItem
                        key={sender.id}
                        id={sender.id}
                        sender={sender}
                        setSelectedSender={setSelectedSender}
                    />
                ))}
            </div>
            <div className={styles.chat_window}>
                <ChatWindow
                    messages={messages}
                    selectedSender={selectedSender}
                />
            </div>
        </div>
    );
}

export default Chats;
