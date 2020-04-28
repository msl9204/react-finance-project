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

// 왜 Destructuring 하면 에러날까??

export default function CompanyRating(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                {props.data.rating && (
                    <>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Rating
                        </Typography>
                        <Typography variant="h6" component="h6">
                            recommendation :{props.data.rating.recommendation}
                        </Typography>
                        <Typography variant="h6" component="h6">
                            <strong>Score : </strong>
                            {props.data.rating.score}
                        </Typography>
                        <Typography
                            className={classes.pos}
                            color="textSecondary"
                        >
                            {props.data.rating.rating}
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
