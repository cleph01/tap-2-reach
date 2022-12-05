import { useState, useEffect } from "react";

import { doc, onSnapshot } from "firebase/firestore";

import { db } from "../utils/db/firebaseConfig";

const useDoc = (path) => {
    const [record, setRecord] = useState();

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, path), (doc) => {
            setRecord(doc.data());
        });


        return unsubscribe;
    }, []);

    return record;
};

export default useDoc;
