import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/Main/Dashboard";
import RenderCompanyList from "./components/CompanyList/RenderCompanyList";

function App() {
    return (
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/list" component={RenderCompanyList} />
        </div>
    );
}

export default App;
