import React, { useEffect, useState } from 'react'
import './Services.css'
import { Logo } from './Services'
import Logo6 from '../images/6.jpg'

const Engineering = () => {
    const [ title, setTitle ] = useState('');

    // updata title 
    useEffect( () => {
        setTitle(document.title= "Engineering");

    }, []);
    return (
        <section className="construction procurement " >
            <Logo />
            <div className='container' >
                <div className="img-construction w-100" >
                    <img src={ Logo6 }  alt='' width='100%' />
                </div>
            </div>
            <div className="container " >
                <div className="row ">
                    <div className="col-lg-6">
                        <div className='discription ' >
                            <h5 >  description </h5>
                            <p>
                                Our mission goes far beyond the projects execution, TEMC also provide Engineering  services to our clients.
                            </p>
                            <p> 
                                Based on our team of highly qualified engineers, TEMC can provide EPC turnkey solutions according to international forms of contract [FIDIC].
                            </p>
                            <p className='lead' >
                                We always make sure that our solutions comply with international technical standards.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img className='w-100 img-procurement' alt='' src='/images/10.jpg' />
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Engineering;



