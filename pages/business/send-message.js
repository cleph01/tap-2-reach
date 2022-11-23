import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../../styles/UserSendMsg.module.scss";

import AvailableNumbersList from "../../components/business/send-msg/AvailableNumbersList";
import SelectedNumbersList from "../../components/business/send-msg/SelectedNumbersList";

function SendMessage() {
    const [textMsg, setTextMsg] = useState();

    const [selectedNumbers, setSelectedNumbers] = useState();

    const handleChange = (event) => {
        setTextMsg(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.text_area}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Message To Send"
                        multiline
                        rows={4}
                        value={textMsg}
                        onChange={handleChange}
                        placeholder="Enter Message"
                        inputProps={{ maxLength: 12 }}
                        sx={{ width: "100%" }}
                    />
                </div>
                <div className={styles.select_number_wrapper}>
                    <div className={styles.number_list}>
                        <AvailableNumbersList
                            setSelectedNumbers={setSelectedNumbers}
                        />
                    </div>
                    <div className={styles.selected_numbers}>
                        <SelectedNumbersList />
                    </div>
                </div>
                <div className={styles.button_footer}>
                    <Button variant="contained" color="primary">
                        Confirm
                    </Button>
                    <Button variant="contained" color="error">
                        Reset Form
                    </Button>
                </div>
            </div>

            <div>Modal Confirming Send Authorization</div>
        </div>
    );
}

export default SendMessage;
