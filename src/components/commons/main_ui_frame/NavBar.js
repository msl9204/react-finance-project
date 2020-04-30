import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f2f2f2",
        height: "100vh",
    },

    list: {
        width: "80%",
        maxWidth: 360,
        marginTop: "20px",
    },

    "list-item": {
        marginBottom: "20px",
        color: "black",
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
                <List
                    className={classes.list}
                    component="nav"
                    aria-label="main mailbox folders"
                >
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <ListItem button className={classes["list-item"]}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <Link to="/list" style={{ textDecoration: "none" }}>
                        <ListItem button className={classes["list-item"]}>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="CompanyList" />
                        </ListItem>
                    </Link>

                    <Link to="/news" style={{ textDecoration: "none" }}>
                        <ListItem button className={classes["list-item"]}>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="News" />
                        </ListItem>
                    </Link>

                    <ListItem button className={classes["list-item"]}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favorites" />
                    </ListItem>
                </List>
            </Grid>
        </div>
    );
}
