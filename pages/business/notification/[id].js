import { useState } from "react";

import NotificationDatePicker from "../../../components/business/notification/DatePicker";
import TimePicker from "../../../components/business/notification/TimePicker";

import styles from "../../../styles/components/business/notification/AddNotification.module.scss";

const Notification = () => {
    const [time, setTime] = useState({ hour: "", minute: "", meridiem: "" });
    const [date, setDate] = useState(null);

    const today = new Date(date);

    const todayStr = `${today?.toLocaleDateString()} ${time?.hour}:${
        time?.minute
    } ${time?.meridiem}`;
    console.log(todayStr);

    console.log(new Date(todayStr));
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NotificationDatePicker date={date} setDate={setDate} />
                <TimePicker time={time} setTime={setTime} />
            </div>
        </div>
    );
};

export default Notification;
