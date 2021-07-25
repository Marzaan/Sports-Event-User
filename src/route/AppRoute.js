import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import EventDetailsPage from "../pages/EventDetailsPage";
import SearchEvents from "../components/other/SearchEvents";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/events" component={EventsPage}/>
                    <Route exact path="/eventDetails/:id" render={(props) => <EventDetailsPage {...props} key={Date.now()}/>}/>
                    <Route exact path="/search/:data" render={(props) => <SearchEvents {...props} key={Date.now()}/>}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;