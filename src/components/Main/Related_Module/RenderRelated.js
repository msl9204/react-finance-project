import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { getRelatedInfo } from "../../../_actions/CompanyFetch_action";

const useStyles = makeStyles({
    root: {
        width: "9vw",
        marginTop: "15px",
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

export default function RenderRelated(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selected_rel_info = useSelector(
        (state) => state.search_value.selected_rel_info
    );

    const text = props.data.toString();

    useEffect(() => {
        dispatch(getRelatedInfo(text));
    }, [text]);

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {selected_rel_info &&
                    selected_rel_info.companiesPriceList.map((item) => (
                        <>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                {item.symbol}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {item.price}$
                            </Typography>
                        </>
                    ))}
            </CardContent>
        </Card>
    );
}
