import React from "react";
import Grid from "@material-ui/core/Grid";
import SelectedCompany from "./SelectedCompany";
import CanvasModule from "./Canvas";
import renderMainFrame from "../commons/main_ui_frame/renderMainFrame";

export default function Dashboard() {
    return renderMainFrame(
        <>
            <Grid item xs={2}>
                <SelectedCompany />
            </Grid>
            <Grid item xs={6}>
                <CanvasModule />
            </Grid>
            <Grid item xs={2}></Grid>
        </>
    );
}
