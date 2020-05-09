import React, { useEffect, useState } from "react";
import CanvasJSReact from "../../../assets/canvasjs.react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Axios from "axios";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var chart = new CanvasJS.Chart("chartjs");
var dataPoints = [];

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        marginBottom: "20px",
        minWidth: 275,
    },

    buttongroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

export default function StockHistory(props) {
    const [isReload, setisReload] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        if (isReload === 1) {
            dataPoints = [];
        }

        Axios.get(
            "https://financialmodelingprep.com/api/v3/historical-price-full/" +
                props.symbol +
                "?from=2019-04-30&to=2020-04-30"
        )
            .then((response) => response.data)
            .then(function (data) {
                for (var i = 0; i < data.historical.length; i++) {
                    var x = new Date(data.historical[i].date);
                    var y = [
                        data.historical[i].open,
                        data.historical[i].high,
                        data.historical[i].low,
                        data.historical[i].close,
                    ];
                    console.log(data[i]);
                    dataPoints.push({
                        x: x,
                        y: y,
                    });
                }
                chart.render();
            })
            .then(setisReload(1));
    }, [props.symbol, isReload]);

    var options = {
        // exportEnabled: true,
        title: {},
        axisX: {
            valueFormatString: "YY D MMM",
        },
        axisY: {
            includeZero: false,
            prefix: "$",
        },
        data: [
            {
                type: "candlestick",
                name: "Microsoft Corporation Price",
                yValueFormatString: "$##0.00",
                xValueType: "dateTime",
                dataPoints: dataPoints,
            },
        ],
    };

    return (
        <Card className={classes.root}>
            <CanvasJSChart
                id="chartjs"
                options={options}
                onRef={(ref) => (chart = ref)}
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}

            <div className={classes.buttongroup}>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                >
                    <Button>1일</Button>
                    <Button>1주일</Button>
                    <Button>3개월</Button>
                    <Button>1년</Button>
                    <Button>3년</Button>
                    <Button>10년</Button>
                </ButtonGroup>
            </div>
        </Card>
    );
}
