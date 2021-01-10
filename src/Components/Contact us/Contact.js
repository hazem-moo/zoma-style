import React from 'react';
import './Contact.css';
import { Button } from 'reactstrap'
import Logo2 from '../images/2.jpg'

const Contact = () => {
    return (
        <>
            <section className=" contact-logo " >
                <div className='overlay'></div>
                <h2 > CONTACT US </h2>
                <img src={ Logo2 } alt='' width='100%' />
            </section>

            <section className='container ' >
                <div className='row' >
                    <div className='col-lg-7' >
                        <form className='form row' >
                            <div className='col-lg-6 text ' >
                                <input type='text'  placeholder='type your name' required />
                            </div>
                            <div className='col-lg-6 text ' >
                                <input type='password' className='col-lg-6 password' required placeholder='type your password' />
                            </div>
                            <textarea className='col-lg-12 ' placeholder='type your massage ' required />
                            <Button color='danger ' > SEND </Button>
                        </form>
                    </div>

                    <div className='col-lg-5'>
                        <div className='contact-img' >
                            <img src='/images/18.jpg' alt='' width='100%' height="auto" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact;