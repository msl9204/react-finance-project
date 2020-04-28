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
    pos: {
        marginBottom: 12,
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

export default function KeyMetric(props) {
    const [Page, setPage] = useState(0);
    const [MaxPage, setMaxPage] = useState(0);
    const classes = useStyles();

    console.log(props);

    // if (props.data.metrics) {
    //     setMaxPage(props.data.metrics.length);
    // }

    return (
        <Card className={classes.root}>
            <CardContent>
                {props.data.metrics && (
                    <>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Date : {props.data.metrics[Page].date}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            ROE : {props.data.metrics[Page].ROE}
                        </Typography>
                        <Typography variant="h6" component="h6">
                            Enterprise Value :
                            {props.data.metrics[Page]["Enterprise Value"]}
                        </Typography>

                        <Typography
                            className={classes.pos}
                            color="textSecondary"
                        >
                            Cash per Share:
                            {props.data.metrics[Page]["Cash per Share"]}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Debt to Equity:
                            {props.data.metrics[Page]["Debt to Equity"]}
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
                                if (Page !== MaxPage - 1) {
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
