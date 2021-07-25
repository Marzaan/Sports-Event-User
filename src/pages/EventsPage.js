import React, {Component, Fragment} from 'react';
import Events from "../components/home/Events";
import NavBar from "../components/home/NavBar";

class EventsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Events/>
            </Fragment>
        );
    }
}

export default EventsPage;