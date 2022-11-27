import React from "react";

import { ListItem, ListItemText } from "@mui/material";
import moment from "moment/moment";

const MessageItem = ({ message }) => {
    return (
        <ListItem
            sx={
                message.direction === "in"
                    ? { mt: 3, boxShadow: 3 }
                    : {
                          textAlign: "right",
                          mt: 3,
                          boxShadow: 3,
                      }
            }
            style={{ backgroundColor: "#fafafa" }}
        >
            <ListItemText
                primary={message.body}
                secondary={`${moment(message.sent).format(
                    "MM/DD/yyyy h:mm a"
                )} - ${message.direction === "in" ? "sender" : "you"}`}
            />
        </ListItem>
    );
};

export default MessageItem;
