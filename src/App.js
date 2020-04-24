import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/Main/Dashboard";
import RenderCompanyList from "./components/CompanyList/RenderCompanyList";
import RenderNews from "./components/New/NewsData";

function App() {
    return (
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/list" component={RenderCompanyList} />
            <Route exact path="/news" component={RenderNews} />
        </div>
    );
}

export default App;
