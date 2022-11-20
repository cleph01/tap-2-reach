import React, { useState, useEffect } from "react";
import Link from "next/link";
import dashify from "dashify";

import Skeleton from "@mui/material/Skeleton";

import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import styles from "../styles/components/ClientListItem.module.scss";

const reviewed = true;

function ClientListItem() {
    return (
        <div className={styles.container}>
            {/* <Divider /> */}
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <Avatar src={""} />
                </div>
                <div className={styles.name}>fName lName</div>
                <div className={styles.star}>
                    {reviewed ? (
                        <StarIcon sx={{ color: "gold" }} />
                    ) : (
                        <StarOutlineIcon />
                    )}
                </div>
            </div>

            <div className={styles.body_wrapper}>
                <div className={styles.body_content}>
                    <div className={styles.body_label}>PHONE</div>
                    <div>9143125729</div>
                </div>
                <div className={styles.body_content}>
                    <div className={styles.body_label}>EMAIL</div>
                    <div>charlesmontoya79@gmail.com</div>
                </div>
            </div>
            <Divider />
        </div>
    );
}

export default ClientListItem;
