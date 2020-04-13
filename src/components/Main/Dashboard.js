import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import UpperBar from "../../commons/main_ui_frame/UpperBar";
import NavBar from "../../commons/main_ui_frame/NavBar";
import CompanyList from "./CompanyList";
import CanvasModule from "./Canvas";
import renderMainFrame from "../../commons/main_ui_frame/renderMainFrame";

export default function Dashboard() {
    return renderMainFrame(
        <>
            <Grid item xs={2}>
                <CompanyList />
            </Grid>
            <Grid item xs={6} style={{ marginTop: "20px" }}>
                <CanvasModule />
            </Grid>
            <Grid item xs={2}></Grid>
        </>
    );
}
