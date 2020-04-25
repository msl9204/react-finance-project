import React from "react";
import Grid from "@material-ui/core/Grid";
import SelectedCompany from "./SelectedCompany";
import renderMainFrame from "../commons/main_ui_frame/renderMainFrame";

export default function Dashboard() {
    return renderMainFrame(
        <>
            <SelectedCompany />
        </>
    );
}
