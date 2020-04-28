import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    grid: {
        overflow: "hidden",
        height: "90vh",
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
    },

    card_action: {
        "max-height": "10vh",

        // width: 250,
    },
});

export default function NewsBox({ news_data }) {
    const [height, setHeight] = React.useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setHeight(window.innerHeight);
        console.log("ClientH:", grid_size.current.clientHeight);
    };

    const classes = useStyles();

    const grid_size = useRef("");

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);

    console.log(height);

    return (
        <Grid
            item
            xs={8}
            sm={8}
            md={8}
            lg={8}
            className={classes.grid}
            ref={grid_size}
        >
            <Card className={classes.root}>
                {news_data &&
                    news_data.map((item) => (
                        <CardActionArea
                            className={classes.card_action}
                            key={item.headline}
                        >
                            <CardContent className={classes.typo}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {item.headline}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {item.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    ))}
            </Card>
        </Grid>
    );
}
