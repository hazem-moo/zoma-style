import React, { useState, useEffect} from 'react'
import './Services.css'
import { Logo } from "./Services"
import Logo5 from '../images/5.jpg'

const Procurement = () => {
    const [ title, setTitle ] = useState('');

    // updata title 
    useEffect( () => {
        setTitle(document.title= "Procurement");

    }, [])

    return (
        <section className="construction procurement " >
            <Logo />

            <div className='container' >
                <div className="img-construction w-100" >
                    <img src={ Logo5 }  alt='' width='100%' />
                </div>
            </div>
            
            <div className="container " >
                <div className="row ">
                    <div className="col-lg-6">
                        <div className='discription ' >
                            <h5 >  description </h5>
                            <p className='lead' >
                                We are improving our supply chain & logistics team in order to maintain reliability& availability through all the project life cycle specially the Fast Track Projects.
                            </p>
                            <p> 
                                We make sure to attend all national/international events related to our scope in order enlarge our data-base with qualified vendors to provide best quality with competitive prices.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img className='w-100 img-procurement' alt='' src='/images/3.jpg' />
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Procurement;