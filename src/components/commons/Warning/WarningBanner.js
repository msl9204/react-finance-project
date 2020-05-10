import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

export default function WarnningBanner() {
    return (
        <div>
            <Alert severity="error">
                This is an error alert — check it out!
            </Alert>
        </div>
    );
}
