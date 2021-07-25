import React, {Component, Fragment} from 'react';
import {Card, Col, Container, DropdownButton,Dropdown, Row} from "react-bootstrap";
import ApiURL from "../../api/ApiURL";
import axios from 'axios';
import {Link} from "react-router-dom";

class Events extends Component {
    constructor() {
        super();
        this.state = {
            category: '',
            categoryCondition: false,
            categoriesData: [],
            eventsData : [],
            dataByCategory: []
        }
    }
    componentDidMount() {
        axios.get(ApiURL.getEvents)
            .then(response=>{
                this.setState({eventsData:response.data});
            })
            .catch(error=>{
                alert("Server is not responding");
            })
        axios.get(ApiURL.getCategories)
            .then(response=>{
                this.setState({categoriesData:response.data});
            })
            .catch(error=>{
                alert("Server is not responding");
            })
    }
    onCategory(category){
        this.setState({category:category})
        axios.get(ApiURL.eventsByCategory(category))
            .then(response=>{
                this.setState({categoryCondition:true})
                this.setState({dataByCategory:response.data})
            })
            .catch(error=>{
                alert("Server is not responding");
            })
    }
    render() {
        const myCategoryData = this.state.categoriesData;
        const myCategoryView = myCategoryData.map((data,index)=>{
            return(
                <Dropdown.Item onClick={() => this.onCategory(data.category)}>{data.category}</Dropdown.Item>
            )
        })
        const myEventsData = this.state.eventsData;
        const myView = myEventsData.map((data,index)=>{
            return(
                <Col className="p-1" key={index} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Card className="card w-100 image-box ">
                        <img style={{width:200,height:150}} alt="demo" src={data.image}/>
                        <Card.Body>
                            <h5>{data.event}</h5>
                            <h6 style={{color:'blue'}}>{data.date}</h6>
                            <Link className="btn btn-dark" to={"/eventDetails/"+data.id}>View Details</Link>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        const myCategoryEventsData = this.state.dataByCategory;
        const myCategoryEventView = myCategoryEventsData.map((data,index)=>{
            return(
                <Col className="p-1" key={index} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Card className="card w-100 image-box ">
                        <img style={{width:200,height:150}} alt="demo" src={data.image}/>
                        <Card.Body>
                            <h5>{data.event}</h5>
                            <h6 style={{color:'blue'}}>{data.date}</h6>
                            <Link className="btn btn-dark" to={"/eventDetails/"+data.id}>View Details</Link>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        if(this.state.categoryCondition === false){
            return (
                <Fragment>
                    <Container style={{marginLeft:10}} className="text-center BetweenTwoSection" fluid={true}>
                        <div style={{display:'flex',margin:10}} className="justify-content-between">
                            <h4 className="section-title">All Events</h4>
                            <DropdownButton id="dropdown-dark-button" variant="dark" title="View By Category">
                                {myCategoryView}
                            </DropdownButton>
                        </div>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        else{
            return (
                <Fragment>
                    <Container style={{marginLeft:10}} className="text-center BetweenTwoSection" fluid={true}>
                        <div style={{display:'flex',margin:10}} className="justify-content-between">
                            <h4 className="section-title">{this.state.category} Events</h4>
                            <DropdownButton id="dropdown-dark-button" variant="dark" title="View By Category">
                                {myCategoryView}
                            </DropdownButton>
                        </div>
                        <Row>
                            {myCategoryEventView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Events;