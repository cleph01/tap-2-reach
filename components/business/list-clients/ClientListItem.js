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

import styles from "../../../styles/components/business/list-clients/ClientListItem.module.scss";

const reviewed = true;

function ClientListItem({ client }) {
    console.log(client);
    return (
        <div className={styles.container}>
            {/* <Divider /> */}
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <Avatar src={""} />
                </div>
                <div
                    className={styles.name}
                >{`${client.firstName} ${client.lastName}`}</div>
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
                    <div className={styles.body_leftRow}>
                        <div className={styles.body_label}>PHONE</div>
                        <div className={styles.body_label}>EMAIL</div>
                    </div>
                    <div className={styles.body_rightRow}>
                        <div>{client.cellNumber}</div>
                        <div>{client.email}</div>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    );
}

export default ClientListItem;
