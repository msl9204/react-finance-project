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

export default function BasicInfo(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {props.industry}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.companyName}
                </Typography>
                <Typography variant="h6" component="h6">
                    <span>
                        <strong>{props.price} $</strong>
                    </span>
                </Typography>

                {props.changes > 0 && (
                    <Typography style={{ color: "red" }}>
                        +{props.changes}$&nbsp;
                        {props.changesPercentage}
                    </Typography>
                )}
                {props.changes < 0 && (
                    <Typography style={{ color: "blue" }}>
                        {props.changes}$&nbsp;
                        {props.changesPercentage}
                    </Typography>
                )}

                <Typography className={classes.pos} color="textSecondary">
                    {props.description}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.sector}
                </Typography>
            </CardContent>
        </Card>
    );
}
