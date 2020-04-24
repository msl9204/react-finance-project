import React from "react";
import Grid from "@material-ui/core/Grid";
import UpperBar from "./UpperBar";
import NavBar from "./NavBar";

export default function renderMainFrame(objects) {
    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <UpperBar />
            </div>
            <Grid container spacing={3}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <NavBar />
                </Grid>
                {/* 여기까지 상단 바랑 왼쪽 바 고정되는 부분*/}

                {objects}
            </Grid>
        </div>
    );
}
