import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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

export default function SelectedCompany() {
    const classes = useStyles();
    const selected_company = useSelector(
        (state) => state.search_value.selected_value.profile
    );

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {selected_company && selected_company.industry}
                </Typography>
                <Typography variant="h5" component="h2">
                    {selected_company && selected_company.companyName}
                </Typography>
                <Typography variant="h6" component="h6">
                    <strong>
                        {selected_company && selected_company.price}
                    </strong>
                    {selected_company && selected_company.changes}
                    {selected_company && selected_company.changesPercentage}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {selected_company && selected_company.description}
                </Typography>
                <Typography variant="body2" component="p">
                    {selected_company && selected_company.sector}
                </Typography>
            </CardContent>
        </Card>
    );
}
