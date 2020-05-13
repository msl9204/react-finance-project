import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ArrowLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        position: "relative",
        minWidth: 275,
    },

    title: {
        fontSize: 14,
    },
    card: {
        marginBottom: 5,
        fontSize: 15,
        backgroundColor: "#f5f5f5",
    },

    prev: {
        height: 38,
        width: 38,
        position: "absolute",
        top: "0.5%",
        left: "18%",
        padding: "1px",
    },

    next: {
        height: 38,
        width: 38,
        position: "absolute",
        top: "0.5%",
        left: "25%",
        padding: "1px",
    },
});

export default function RenderNews({ data }) {
    const classes = useStyles();
    const [Page, setPage] = React.useState(0);

    console.log("PAGE : ", Page);
    if (data) {
        console.log("LENGTH : ", data.length);
    }
    // 배열형태로 받아서 Pagination 구현해보기

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    News Section
                </Typography>
                <Grid container spacing={1}>
                    {data &&
                        data.slice(Page, Page + 10).map((item) => (
                            <Grid item xs={6}>
                                <Link
                                    href={item.url}
                                    underline="none"
                                    target="_blank"
                                >
                                    <Card
                                        key={item.id}
                                        className={classes.card}
                                    >
                                        <CardContent>
                                            <strong>{item.headline}</strong>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                </Grid>
            </CardContent>
            <IconButton
                className={classes.prev}
                onClick={() => {
                    if (Page !== 0) {
                        setPage(Page - 10);
                    }
                }}
            >
                <ArrowLeftRoundedIcon></ArrowLeftRoundedIcon>
            </IconButton>
            <IconButton
                className={classes.next}
                onClick={() => {
                    if (Page !== data.length - 10) {
                        setPage(Page + 10);
                    }
                }}
            >
                <ArrowRightRoundedIcon></ArrowRightRoundedIcon>
            </IconButton>
        </Card>
    );
}
