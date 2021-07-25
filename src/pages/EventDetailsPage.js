import React, {Component, Fragment} from 'react';
import NavBar from "../components/home/NavBar";
import {Card, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../api/ApiURL";

class EventDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state = {
            eventID : match.params.id,
            eventData: []
        }
    }
    componentDidMount() {
        axios.get(ApiURL.eventDetails(this.state.eventID))
            .then(response=>{
                this.setState({eventData:response.data});
                console.log(this.state.eventData);
            })
            .catch(error=>{
                alert("Server is not responding");
            })
    }
    render() {
        const myEventData = this.state.eventData;
        const myView = myEventData.map((data,index)=>{
            return(
                <Row className="justify-content-center">
                    <Card style={{padding:20,width:'50rem'}}>
                        <Row className="text-center">
                            <img alt="demo" className="w-100" src={data.image}/>
                        </Row>
                        <Row>
                            <div style={{display:'flex'}} className="justify-content-between">
                                <h5 className="mt-2">{data.event}</h5>
                                <h3 className="mt-2">{data.category} Match</h3>
                                <p style={{color:'blue'}} className="mt-2">{data.date}</p>
                            </div>
                            <p>{data.description}Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                        </Row>
                    </Card>
                </Row>
            )
        })
        return (
            <Fragment>
                <NavBar/>
                <Container>
                    {myView}
                </Container>
            </Fragment>
        );
    }
}

export default EventDetailsPage;