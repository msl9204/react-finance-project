import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ArrowLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        position: "relative",
        marginTop: "20px",
        minWidth: 275,
        paddingBottom: "10px",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },

    prev: {
        height: 38,
        width: 38,
        position: "absolute",
        bottom: "0.1%",
        right: "55%",
        padding: "1px",
    },

    next: {
        height: 38,
        width: 38,
        position: "absolute",
        bottom: "0.1%",
        right: "35%",
        padding: "1px",
    },
});

export default function KeyMetric({ data }) {
    const [Page, setPage] = useState(0);
    const classes = useStyles();

    console.log("data : ", data);

    return (
        <Card className={classes.root}>
            <CardContent>
                {data.metrics && (
                    <>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            KeyMetricInfo
                        </Typography>
                        <Typography variant="body1">
                            Date : {data.metrics[Page].date}
                        </Typography>
                        <Typography variant="body1">
                            ROE : {data.metrics[Page].ROE}
                        </Typography>
                        <Typography variant="body1">
                            Enterprise Value :
                            {data.metrics[Page]["Enterprise Value"]}
                        </Typography>

                        <Typography variant="body1">
                            Cash per Share:
                            {data.metrics[Page]["Cash per Share"]}
                        </Typography>
                        <Typography variant="body1">
                            Debt to Equity:
                            {data.metrics[Page]["Debt to Equity"]}
                        </Typography>
                        <IconButton
                            className={classes.prev}
                            onClick={() => {
                                if (Page !== 0) {
                                    setPage(Page - 1);
                                }
                            }}
                        >
                            <ArrowLeftRoundedIcon></ArrowLeftRoundedIcon>
                        </IconButton>
                        <IconButton
                            className={classes.next}
                            onClick={() => {
                                if (Page !== data.metrics.length - 1) {
                                    setPage(Page + 1);
                                }
                            }}
                        >
                            <ArrowRightRoundedIcon></ArrowRightRoundedIcon>
                        </IconButton>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
