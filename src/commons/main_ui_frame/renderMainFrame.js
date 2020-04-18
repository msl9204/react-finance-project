import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import UpperBar from "../../commons/main_ui_frame/UpperBar";
import NavBar from "../../commons/main_ui_frame/NavBar";

export default function renderMainFrame(objects) {
    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <UpperBar />
            </div>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <NavBar />
                </Grid>
                {/* 여기까지 상단 바랑 왼쪽 바 고정되는 부분*/}

                {objects}
            </Grid>
        </div>
    );
}
