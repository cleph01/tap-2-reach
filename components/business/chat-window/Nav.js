import useCollection from "../../../custom-hooks/useCollection";

import { useState, useEffect } from "react";

import {
    collection,
    query,
    onSnapshot,
    where,
    orderBy,
} from "firebase/firestore";

import { db } from "../../../utils/db/firebaseConfig";

import styles from "../../../styles/components/business/chat/Nav.module.scss";
import useDoc from "../../../custom-hooks/useDoc";

function Nav({ channelId }) {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "channels");

        let q = query(
            collectionRef,
            where("@businessId", "==", "fpVAtpBjJLPUanlCydra")
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setChannels(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
        });

        return unsubscribe;
    }, []);

    console.log("CHannels at Nav: ", channels);
    return (
        <div className={styles.Nav}>
            <div className={styles.User}>
                <picture>
                    <source
                        srcSet="https://placekitten.com/64/64"
                        type="image/webp"
                    />
                    <img
                        className={styles.UserImage}
                        alt="whatever"
                        src="https://placekitten.com/64/64"
                    />
                </picture>

                <div>
                    <div>Ryan Florence</div>
                    <div>
                        <button className={styles.textButton}>log out</button>
                    </div>
                </div>
            </div>
            <nav className={styles.ChannelNav}>
                <a href="/business/chat/fpVAtpBjJLPUanlCydra"># Help Desk</a>
                {channels.map((channel, index) => (
                    <ChannelListItem key={index} channel={channel} />
                ))}
            </nav>
        </div>
    );
}

const ChannelListItem = ({ channel }) => {
    const author = useDoc(channel.customer.path);

    return (
        <a key={channel.id} href={`/business/chat/${channel.id}`}>
            # {author?.displayName}
        </a>
    );
};

export default Nav;
