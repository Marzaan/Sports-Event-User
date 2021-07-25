import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            featuredData : []
        }
    }
    componentDidMount() {
        axios.get(ApiURL.featuredEvents)
            .then(response=>{
                this.setState({featuredData:response.data});
            })
            .catch(error=>{
                alert("Server is not responding");
            })
    }

    render() {
        const divStyle = {
            marginTop:20,
            marginLeft:50,
            marginRight:50,
            marginBottom:50,
            justifyContent:'center',
            alignItems: "center",
            height:'100vh'
        }
        const circularButton = {
            padding: 10,
            margin: 10,
            backgroundColor: 'black',
            color: 'white',
            borderRadius: 25
        };
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const myFeaturedData = this.state.featuredData;
        const myView = myFeaturedData.map((data,index)=>{
            return(
                <div  className="container-fluid m-0 p-0 overflow-hidden w-100 shadow-sm">
                    <div style={{backgroundColor:'#F5F3F3'}} className="m-0 p-0">
                        <div className="row card-body">
                            <div className="col-md-6 slider-title-div animated slideInDown text-center">
                                <h5 style={{color:'black'}} className="slider-title">{data.event}</h5>
                                <h3 style={{color:'black'}} className="slider-title">{data.category} Match</h3>
                                <h6 style={{color:'blue'}} className="slider-title">Date: {data.date}</h6>
                                <Link to={"eventDetails/"+data.id} style={circularButton} className="btn btn-dark">View Details</Link>
                            </div>
                            <div className="col-md-6 animated slideInDown text-center">
                                <img height="450" className="w-100" src={data.image} alt="slider img"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <Fragment>
                <div style={divStyle}>
                    <h2>Featured Event</h2>
                    <Slider {...settings}>
                        {myView}
                    </Slider>
                </div>
            </Fragment>
        );
    }
}

export default Home;