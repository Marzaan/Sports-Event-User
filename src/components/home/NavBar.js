import React, {Component, Fragment} from 'react';
import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            searchRedirect: false,
            searchQuery: ''
        }
    }
    onSearchRedirect(){
        if(this.state.searchRedirect===true){
            return(
                <Redirect to={"/search/"+this.state.searchQuery}/>
            )
        }
    }
    searchOnChange=(event)=>{
        let search = event.target.value;
        this.setState({searchQuery:search});
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.setState({searchRedirect:true});
    }
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Navbar.Brand>
                                        <Link style={{color:'white',textDecoration:'none'}} to="/events">Events</Link>
                                    </Navbar.Brand>
                                </Nav>
                                <Form onSubmit={this.onFormSubmit} className="d-flex">
                                    <FormControl
                                        onChange={this.searchOnChange}
                                        type="search"
                                        placeholder="Search Event"
                                        className="mr-2"
                                        aria-label="Search"
                                    />
                                </Form>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
                {this.onSearchRedirect()}
            </Fragment>
        );
    }
}

export default NavBar;