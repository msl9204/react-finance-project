import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        marginTop: "20px",
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CompanyRating(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    111
                </Typography>
                <Typography variant="h5" component="h2">
                    222
                </Typography>
                <Typography variant="h6" component="h6">
                    <strong>333</strong>
                    444 555
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    666
                </Typography>
                <Typography variant="body2" component="p">
                    777
                </Typography>
            </CardContent>
        </Card>
    );
}
