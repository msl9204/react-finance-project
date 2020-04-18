import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Pagination from "material-ui-flat-pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import renderMainFrame from "../../commons/main_ui_frame/renderMainFrame";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { fetchCompanyList } from "../../_actions/CompanyFetch_action";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function RenderCompanyList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCompanyList());
    }, []);

    const classes = useStyles();
    const company_list = useSelector(
        (state) => state.company_reducer.company_data,
        []
    );

    return renderMainFrame(
        <Grid>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell align="right">DisplaySymbol</TableCell>
                            <TableCell align="right">Symbol</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {company_list &&
                            company_list.map((row) => (
                                <TableRow key={row.description}>
                                    <TableCell component="th" scope="row">
                                        {row.description}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.displaySymbol}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.symbol}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
