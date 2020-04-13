import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#424242",
        height: "100vh",
    },
}));

export default function NavButtons() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={5}
                direction="column"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid item xs={12} style={{ marginTop: "50px" }}>
                    <Button size="large" variant="outlined">
                        Dashboard
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button size="large" variant="outlined">
                        New
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" color="secondary">
                        Company List
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" disabled>
                        Disabled
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        color="primary"
                        href="#outlined-buttons"
                    >
                        Link
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
