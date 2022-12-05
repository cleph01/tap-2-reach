import { useState, useEffect } from "react";

import {
    collection,
    query,
    onSnapshot,
    where,
    orderBy,
} from "firebase/firestore";

import { db } from "../utils/db/firebaseConfig";

const useCollection = (path, orderby, whereStr) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, path);

        let q =
            whereStr && orderby
                ? query(collectionRef, where(whereStr), orderBy(orderby))
                : orderby
                ? query(collectionRef, orderBy(orderby))
                : query(collectionRef);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setDocs(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
        });

        return unsubscribe;
    }, [orderby, path]);

    return docs;
};

export default useCollection;
