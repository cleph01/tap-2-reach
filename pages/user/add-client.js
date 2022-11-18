import { useState } from "react";
import dashify from "dashify";
import axios from "axios";

import TextField from "@mui/material/TextField";

import styles from "../../styles/Input.module.scss";

const AddClient = () => {
    const [content, setContent] = useState({
        firstName: undefined,
        lastName: undefined,
        cellNumber: undefined,
        email: undefined,
    });
    const onChange = (e) => {
        const { value, name } = e.target;
        setContent((prevState) => ({ ...prevState, [name]: value }));
    };
    const onSubmit = async () => {
        const { title, body } = content;
        await axios.post("/api/entry", { title, slug: dashify(title), body });
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3>Add Client Contact Info</h3>
                <TextField
                    className={styles.input}
                    error={false}
                    id="outlined-error"
                    label="First Name"
                    placeholder="Enter First Name"
                    value={content.firstName}
                    onChange={onChange}
                />
                <TextField
                    className={styles.input}
                    error={false}
                    id="outlined-error"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    value={content.lastName}
                    onChange={onChange}
                />
                <TextField
                    className={styles.input}
                    error={false}
                    id="outlined-error"
                    label="Cellphone Number"
                    placeholder="#s Only - No Spaces"
                    value={content.cellNumber}
                    onChange={onChange}
                />
                <TextField
                    className={styles.input}
                    error={false}
                    id="outlined-error"
                    label="E-mail Address"
                    placeholder="Enter Full Email Address"
                    value={content.email}
                    onChange={onChange}
                />

                <button onClick={onSubmit}>POST</button>
            </div>
        </div>
    );
};

export default AddClient;
