import React, {Component, Fragment} from 'react';
import NavBar from "../home/NavBar";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class SearchEvents extends Component {
    constructor({match}) {
        super();
        this.state = {
            searchQuery : match.params.data,
            searchData: []
        }
    }
    componentDidMount() {
        axios.get(ApiURL.searchEvent(this.state.searchQuery))
            .then(response=>{
                this.setState({searchData:response.data})
            })
            .catch(error=>{
                alert("Server is not responding");
            })
    }

    render() {
        const mySearchData = this.state.searchData;
        const myView = mySearchData.map((data,index)=>{
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
        return (
            <Fragment>
                <NavBar/>
                <Container className="text-center BetweenTwoSection" fluid={true}>
                    <h4 className="section-title">Search Events</h4>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default SearchEvents;