import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ede7f6",
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
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    style={{ marginTop: "50px" }}
                >
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                        >
                            Dashboard
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Link to="/list" style={{ textDecoration: "none" }}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                        >
                            Company List
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Link to="/news" style={{ textDecoration: "none" }}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                        >
                            News
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button variant="outlined" color="primary">
                        Disabled
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button variant="outlined" color="primary">
                        Link
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
