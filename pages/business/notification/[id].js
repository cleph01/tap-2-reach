import { useState } from "react";

import { collection, addDoc, Timestamp } from "firebase/firestore";

import { db } from "../../../utils/db/firebaseConfig";

import NotificationDatePicker from "../../../components/business/notification/DatePicker";
import TimePicker from "../../../components/business/notification/TimePicker";
import { Button } from "@mui/material";

import styles from "../../../styles/components/business/notification/AddNotification.module.scss";
import { AssignedAddOnContext } from "twilio/lib/rest/api/v2010/account/incomingPhoneNumber/assignedAddOn";

const Notification = () => {
    const [time, setTime] = useState({ hour: "", minute: "", meridiem: "" });
    const [date, setDate] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        const todayStr = `${today?.toLocaleDateString()} ${time?.hour}:${
            time?.minute
        } ${time?.meridiem}`;
        console.log(todayStr);

        const dataObj = {
            customerId: "abx",
            customerCell: "9143125729",
            message: "Don't forget your appt on Jan 1. 2023 @ 3:00pm",
            from: "9144001284",
            timeZone: "America/New_York",
            notifyOn: Timestamp.fromDate(new Date(todayStr)),
            createdOn: Timestamp.fromDate(new Date()),
        };
        const docRef = await addDoc(collection(db, "notifications"), dataObj);

        if (docRef.id) {
            console.log("Notication Saved");
        }
    };
    const today = new Date(date);

    const todayStr = `${today?.toLocaleDateString()} ${time?.hour}:${
        time?.minute
    } ${time?.meridiem}`;
    console.log(todayStr);

    console.log(new Date(todayStr));
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <NotificationDatePicker date={date} setDate={setDate} />
                    <TimePicker time={time} setTime={setTime} />
                </div>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default Notification;
