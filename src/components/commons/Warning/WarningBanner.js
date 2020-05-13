import React from "react";
import Alert from "@material-ui/lab/Alert";

export default function WarnningBanner({ message }) {
    return (
        <div>
            <Alert severity="error">
                This is an error alert — {message}가 없습니다!!!
            </Alert>
        </div>
    );
}
