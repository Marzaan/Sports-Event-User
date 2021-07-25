import React, {Component, Fragment} from 'react';
import NavBar from "../components/home/NavBar";
import Home from "../components/home/Home";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Home/>
            </Fragment>
        );
    }
}

export default HomePage;