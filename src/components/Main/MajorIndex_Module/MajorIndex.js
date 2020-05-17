import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        flexWrap: "wrap",
        width: "fit-content",
    },

    card: {
        minWidth: 275,
        width: "5vw",
        height: "10vh",
        margin: "10px",
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

export default function MajorIndex() {
    const classes = useStyles();

    const IndexSelector = useSelector((state) => state.majorindex.company_data);

    if (IndexSelector) {
        console.log(IndexSelector);
    }

    return (
        <div className={classes.root}>
            {IndexSelector &&
                IndexSelector.majorIndexesList.map((item) => (
                    <Card className={classes.card} key={item.ticker}>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                MajorIndex
                            </Typography>
                            <Typography variant="body2">
                                {item.indexName}
                            </Typography>
                            {item.changes > 0 ? (
                                <Typography
                                    className={classes.pos}
                                    variant="body1"
                                    style={{ color: "red" }}
                                >
                                    {item.price} (+{item.changes})&nbsp;
                                </Typography>
                            ) : (
                                <Typography
                                    className={classes.pos}
                                    variant="body1"
                                    style={{ color: "blue" }}
                                >
                                    {item.price} ({item.changes})&nbsp;
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                ))}
        </div>
    );
}
