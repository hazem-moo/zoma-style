import React, { useEffect, useState } from 'react';
import './Services.css';

import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Logo13 from '../images/13.jpg'
import { dataHome } from '../data/dataHome'


export const Logo = () => {
    return (
        <div className="my-service" >
            <div></div>
            <img src={ Logo13 } alt="" width='100%' />
        </div>
    )
}

export const AllServices = () => {

    const totalInfo = dataHome.map( ({ header, image, title, indx, link } ) => {
        return (
            <div className='col-lg-4 text-center' key={ indx } >
                <Card data-aos="fade-left" >
                    <CardTitle tag="h5" > { header } </CardTitle>
                    <CardImg top width="100%" src={ image } className="img-service" />
                    <CardBody >
                        <CardText className="lead" > { title } </CardText>
                        <Button className="my-button " tag={ NavLink } to={ link } color="danger"> READ MORE </Button>
                    </CardBody>
                </Card>
            </div>
        )
    })
    return (
        <section className=" service " >

            <div className="container ">
                <div className="row roow " >
                    { totalInfo }       
                </div>
            </div>
        </section>
    )
}