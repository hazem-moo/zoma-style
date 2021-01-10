import React, { useEffect, useState } from 'react'
import './Services.css';
import { Logo } from "./Services"
import Logo4 from '../images/4.jpg'

const Construction = () => {
    const [ title, setTitle ] = useState('');

    // updata title 
    useEffect( () => {
        setTitle(document.title= "Construction");
    }, [])

    return (
        <section className="construction " >
            <Logo />
            <div className="row " >
                <div className='container' >
                    <div className="img-construction w-100" >
                        <img src={ Logo4 }  alt='' width='100%' />
                    </div>
                    
                    <div className='discription ' >
                        <h5 >  description </h5>
                        <p>
                            We have an experience in the construction field at almost all types of projects:
                        </p>
                        <ul>
                            <li> Residential </li>
                            <li> Industrial </li>
                            <li> Commercial </li>
                            <li> Data centers </li>
                            <li> Hospitals </li>
                            <li> Stadiums && Sports clubs </li>
                            <li> Religious Buildings </li>
                            <li> Hotels </li>
                            <li> Museums </li>
                            <li> Military Facilities </li>
                            <li>
                                The safety plan is always the 1st priority in the field whatever the project type.For all our staff “Safety comes first” because we consider each one of the staff as family member. 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Construction;