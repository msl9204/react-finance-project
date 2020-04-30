import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
    root: {
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
    card: {
        marginBottom: 5,
        fontSize: 15,
        backgroundColor: "#f5f5f5",
    },
});

export default function RenderNews({ data }) {
    const classes = useStyles();

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
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {data &&
                            data.slice(0, 10).map((item) => (
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
                            ))}
                    </Grid>
                    <Grid item xs={6}>
                        {data &&
                            data.slice(10, 20).map((item) => (
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
                            ))}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
