import React from "react";
import { useSelector } from "react-redux";
import SelectedCompany from "../SelectedCompany";
import Grid from "@material-ui/core/Grid";
import renderMainFrame from "../../commons/main_ui_frame/renderMainFrame";
import MajorIndex from "../../Main/MajorIndex_Module/MajorIndex";

export default function Dashboard() {
    const selected_company = useSelector(
        (state) => state.search_value.search_value
    );

    if (selected_company || !selected_company === "") {
        return renderMainFrame(
            <React.Fragment>
                <SelectedCompany companySymbol={selected_company} />
            </React.Fragment>
        );
    } else {
        return renderMainFrame(
            <Grid
                item
                xs={10}
                style={{
                    backgroundColor: "#bdbdbd",
                    borderRadius: "15px",
                    maxWidth: "82%",
                    maxHeight: "92vh",
                    marginTop: "6px",
                    position: "relative",
                }}
            >
                <MajorIndex />
            </Grid>
        );
    }
}
