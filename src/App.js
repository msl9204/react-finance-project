import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "./components/Main/Dashboard";

function App() {
    return (
        <div>
            <Route exact path="/" component={Dashboard} />
        </div>
    );
}

export default App;
