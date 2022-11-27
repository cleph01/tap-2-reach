import React, { useState, useEffect } from "react";

import Link from "next/link";

import Skeleton from "@mui/material/Skeleton";

import {
    ListItem,
    ListItemText,
    Avatar,
    Divider,
    ListItemAvatar,
} from "@mui/material";

import styles from "../../../styles/components/business/chat/ChatSenderItem.module.scss";

const reviewed = true;

function ChatSenderItem({ sender }) {
    console.log(sender);
    return (
        <ListItem
            sx={{ mt: 3, boxShadow: 3 }}
            style={{ backgroundColor: "#fafafa" }}
        >
            <ListItemAvatar>
                <Avatar
                    alt={`${sender.firstName} ${sender.lastName}`}
                    src={""}
                />
            </ListItemAvatar>
            <ListItemText
                primary={`${sender?.firstName} ${sender?.lastName}`}
                secondary={sender?.cellNumber}
            />
        </ListItem>
    );
}

export default ChatSenderItem;
