import { useState } from "react";
import dashify from "dashify";
import axios from "axios";

import TextField from "@mui/material/TextField";

import styles from "../../styles/Input.module.scss";

import SnackBar from "../../components/SnackBar";

const AddClient = () => {
    const [customerInfo, setCustomerInfo] = useState({
        firstName: "",
        lastName: "",
        cellNumber: "",
        email: "",
    });
    const [openSnack, setOpenErrorSnack] = useState({
        open: false,
        severity: "",
        message: "",
    });
    const onChange = (e) => {
        const { value, name } = e.target;
        setCustomerInfo((prevState) => ({ ...prevState, [name]: value }));
        console.log("Customer Info: ", customerInfo);
    };
    const onSubmit = async () => {
        console.log(customerInfo);
        const { firstName, lastName, cellNumber, email } = customerInfo;
        const response = await axios.post("/api/user/entry", customerInfo);

        console.log("FE Response: ", response);

        if (response.status === 200) {
            setOpenErrorSnack({
                open: true,
                severity: "error",
                message: response.data.message,
            });
        } else {
            setOpenErrorSnack({
                open: true,
                severity: "success",
                message: "New Contact Created",
            });
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3>Add Client Contact Info</h3>
                <TextField
                    className={styles.input}
                    name="firstName"
                    error={false}
                    id="outlined-error"
                    label="First Name"
                    placeholder="Enter First Name"
                    value={customerInfo.firstName}
                    onChange={onChange}
                />
                <TextField
                    className={styles.input}
                    name="lastName"
                    error={false}
                    id="outlined-error"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    value={customerInfo.lastName}
                    onChange={onChange}
                />
                <TextField
                    className={styles.input}
                    name="cellNumber"
                    error={false}
                    id="outlined-error"
                    label="Cellphone Number"
                    placeholder="#s Only - No Spaces"
                    value={customerInfo.cellNumber}
                    onChange={onChange}
                />
                <TextField
                    className={styles.input}
                    name="email"
                    error={false}
                    id="outlined-error"
                    label="E-mail Address"
                    placeholder="Enter Full Email Address"
                    value={customerInfo.email}
                    onChange={onChange}
                />

                <button onClick={onSubmit}>POST</button>
            </div>
            <SnackBar
                openSnack={openSnack.open}
                severity={openSnack.severity}
                message={openSnack.message}
                setOpenErrorSnack={setOpenErrorSnack}
            />
        </div>
    );
};

export default AddClient;
