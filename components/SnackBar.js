import { useState, forwardRef } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({
    openSnack,
    severity,
    message,
    setOpenErrorSnack,
}) {
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenErrorSnack(false);
    };

    return (
        <div>
            <Snackbar
                open={openSnack}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
