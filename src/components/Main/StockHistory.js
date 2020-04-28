import React, { useEffect, useState } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Axios from "axios";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var chart = new CanvasJS.Chart("chartjs");
var dataPoints = [];

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
                "?from=2018-03-12&to=2019-03-12"
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
    }, [props.symbol]);

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
        </Card>
    );
}
