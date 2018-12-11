import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import NotFound from "../commons/view_not_found.jsx";

class PrasetiaRoutes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default PrasetiaRoutes;