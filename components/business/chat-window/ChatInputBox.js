import { db } from "../../../utils/db/firebaseConfig";

import { collection, addDoc } from "firebase/firestore";

import styles from "../../../styles/components/business/chat/ChatInputBox.module.scss";

const handleSubmit = async (e) => {
    e.preventDefault();

    const value = e.target.elements[0].value;

    if (value !== "") {
        try {
            const docRef = await addDoc(
                collection(db, "channels/general/messages"),
                {
                    text: value,
                    createdOn: new Date(),
                }
            );

            if (docRef.id) {
                console.log("Saved Message w. ID: ", docRef.id);
            }
        } catch (error) {
            console.log("Error Adding Message: ", error);
        }
    }

    e.target.reset();
};

function ChatInputBox() {
    return (
        <form onSubmit={handleSubmit} className={styles.ChatInputBox}>
            <input
                className={styles.ChatInput}
                placeholder="Message #general"
            />
        </form>
    );
}

export default ChatInputBox;
