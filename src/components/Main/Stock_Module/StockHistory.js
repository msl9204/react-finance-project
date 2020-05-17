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

const DateToyyyymmdd = () => {
    const yyyy = new Date().getFullYear().toString();
    const mm = (new Date().getMonth() + 1).toString();
    const dd = new Date().getDate().toString();

    return (
        yyyy +
        "-" +
        (mm[1] ? mm : "0" + mm[0]) +
        "-" +
        (dd[1] ? dd : "0" + dd[0])
    );
};

const BeforeDate = (y = 0, m = 0, d = 0) => {
    const yyyy = (new Date().getFullYear() - y).toString();
    const mm = (new Date().getMonth() - m).toString();
    const dd = (new Date().getDate() - d).toString();

    return (
        yyyy +
        "-" +
        (mm[1] ? mm : "0" + mm[0]) +
        "-" +
        (dd[1] ? dd : "0" + dd[0])
    );
};

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
    const [Points, setPoints] = useState([]);
    const classes = useStyles();
    const [ButtonDate, setButtonDate] = React.useState(BeforeDate());
    const today = DateToyyyymmdd();

    useEffect(() => {
        if (isReload === 1) {
            dataPoints = [];
        }

        Axios.get(
            `https://financialmodelingprep.com/api/v3/historical-price-full/${props.symbol}?from=${ButtonDate}&to=${today}`
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
                    dataPoints.push({
                        x: x,
                        y: y,
                    });
                }

                setPoints(dataPoints);
                chart.render();
            })
            .then(setisReload(1));
    }, [props.symbol, isReload, today, ButtonDate]);

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
                dataPoints: Points,
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
                    <Button
                        onClick={() => {
                            setButtonDate(BeforeDate(0, -1, 7));
                            dataPoints = [];
                        }}
                    >
                        1주일
                    </Button>
                    <Button
                        onClick={() => {
                            setButtonDate(BeforeDate(0, 0, 0));
                            dataPoints = [];
                        }}
                    >
                        1개월
                    </Button>
                    <Button
                        onClick={() => {
                            setButtonDate(BeforeDate(0, 2, 0));
                            dataPoints = [];
                        }}
                    >
                        3개월
                    </Button>
                    <Button
                        onClick={() => {
                            setButtonDate(BeforeDate(1, 0, 0));
                            dataPoints = [];
                        }}
                    >
                        1년
                    </Button>
                    <Button
                        onClick={() => {
                            setButtonDate(BeforeDate(3, 0, 0));
                            dataPoints = [];
                        }}
                    >
                        3년
                    </Button>
                    <Button
                        onClick={() => {
                            setButtonDate(BeforeDate(10, 0, 0));
                            dataPoints = [];
                        }}
                    >
                        10년
                    </Button>
                </ButtonGroup>
            </div>
        </Card>
    );
}
