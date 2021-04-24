import React, { useEffect, useState } from 'react';
import './WhoWeAde.css';
import  logo  from '../Ather-images/8.jpg'
// import axios from 'axios'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { information } from '../data/data'

// import Logo8 from '../images/8.jpg';
// import Logo10 from '../images/10.jpg';
// import Logo1 from '../images/1.jpg';
// import Logo11 from '../images/11.jpg';
// import Logo12 from '../images/12.jpg';
// import Logo9 from '../images/9.jpg';


// const information = [
//     {
//         "year" : " 2003 ",
//         "header" : " IN INDUSTRIAL FIELD: ",
//         "text" : " Egyptian Korean Factory (port said)-Purified Water Plant (sharm EL-Shiekh ",
//         "img" : ` ${Logo8} `
//     },
//     {
//         "year" : " 2005 ",
//         "header" : " IN RESIDENTIAL FIELD ",
//         "text" : " -Three Corners Resort (hurghada)-EL-Nakheel Compound (New cairo) ",
//         "img" : Logo10
//     },
//     {
//         "year" : " 2006 ",
//         "text" : " -EL-Agouza Military Hospital (cairo)IN STADIUMS AND SPORTS CLUB FIELD: ",
//         "header" : " IN HOSPITALS FIELD: ",
//         "img" : Logo1
//     },
//     {
//         "year" : " 2007 ",
//         "text" : " IN STADIUMS AND SPORTS CLUB FIELD ",
//         "header" : " IN STADIUMS AND SPORTS CLUB FIELD ",
//         "img" : "../images/11.jpg"
//     },
//     {
//         "year" : " 2008 ",
//         "text" : " IN COMMERCIAL FIELD: ",
//         "header" : " Bavaria Memaar Almorshedy ",
//         "img" : Logo12
//     },
//     {
//         "year" : " 2009 ",
//         "text" : " IN STADIUMS AND SPORTS CLUB FIELD ",
//         "header" : " IN COMMERCIAL FIELD: ",
//         "img" : "../images/1.jpg"
//     },
//     {
//         "year" : " 2011 ",
//         "text" : " IN STADIUMS AND SPORTS CLUB FIELD ",
//         "header" : " IN STADIUMS AND SPORTS CLUB FIELD ",
//         "img" : "../images/11.jpg"
//     },
//     {
//         "year" : " 2013 ",
//         "header" : " IN RESIDENTIAL FIELD ",
//         "text" : " -Three Corners Resort (hurghada)-EL-Nakheel Compound (New cairo) ",
//         "img" : "../images/10.jpg"
//     },   
//     {
//         "year" : " 2015 ",
//         "header" : " IN RESIDENTIAL FIELD ",
//         "text" : " -Three Corners Resort (hurghada)-EL-Nakheel Compound (New cairo) ",
//         "img" : Logo9
//     }   
// ];

const WhoWeAde2 = () => {
    const [ title, setTitle ] = useState('');
    // const [ info, setInfo ] = useState( [] );

    // updata title 
    useEffect( () => {
     setTitle(  document.title= "Our history" )
    }, [title]);
    

    const infoItem = information.map(( { indx, header, text, year, img } ) => {
        return (
            <div className="col-lg-4 history-info" key={ indx }>
                <Card >
                    <CardTitle tag='h5'> { year } </CardTitle>
                    <CardBody >
                        <CardTitle tag='h5' > { header } </CardTitle>
                    <CardImg src={ img } />
                        <CardText > { text } </CardText>
                    </CardBody>
                </Card>
            </div>

        )
    })

    return (
        <section  className=" history-info " >
            <div className="img-history ">
                <h2 > OUR HISTORY </h2>
                <p >
                    If you’d like to talk to us about a project, or anything else, we’d love to hear from you. 
                </p>
                <div ></div>
                <img src={ logo } className="w-100 mb-1" alt="" />
            </div>
            <div className='container' >
                <div className="row history" >
                    <aside className="info col-lg-3" >  
                        <h6> OUR OFFICE </h6>
                        <div className="our-office" >
                            <ul className='no-gutters text-left ' >
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p> Abu Bakr Al-Siddiq Arab unity </p>
                                </li>
                                <li >
                                    <i class="fab fa-whatsapp-square"></i>
                                    <p> 01097890457 </p>
                                </li>
                                <li >
                                    <i class="fas fa-envelope"></i>
                                    <p> hazemmo.7077@gmail.com </p>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <div className="col-lg-9 hisiry-inf " >
                        <h3 > HISTORY </h3>
                        <p className="lead">
                            TEMC’s success and reputation is directly attributed to the quality of our staff that forms the backbone in the company’s day-to-day operations. Our knowledgeable & experienced employees have worked together as a team to empower TEMC to achieve a standard of excellence. Many of TEMC’s staff, both management and engineering personnel have a long history with the company, some dating back to its inception. Several employees began their career through electrical apprenticeships with the company and now hold Supervisory positions. Our staff, including technicians, estimators, office staff, project managers, purchasers are complimented with a well defined management approach to enhance client’s business.
                        </p>
                    </div>  
                </div>

                <div className="row text-center " >
                    { infoItem }
                </div>
            </div>
        </section>
    )
}

export default WhoWeAde2;