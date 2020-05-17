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
});

// 왜 Destructuring 하면 에러날까??

export default function CompanyRating({ data }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                {data.rating && (
                    <>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Rating
                        </Typography>
                        <Typography variant="h3">
                            {data.rating.rating}
                        </Typography>
                        <Typography variant="body1">
                            Score : {data.rating.score}
                        </Typography>
                        <Typography variant="body1">
                            recommendation :{data.rating.recommendation}
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
