import React from 'react'
import './Footer.css'
import { NavLink, Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='overlay'></div> 
            <section className='footer-info container' >
                <div className='row' >
                    <div className='col-lg-4' >
                        <div className='info' >
                            <h4> GET IN TOUCH </h4>
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
                        </div>
                    </div>

                    <div className='col=lg-4' >
                        <div className='information text-center' >
                            <h4> INFORMATION </h4>
                            <div className='containet'>
                                <NavLink to='/WhoWeAde' onClick={ () => window.scrollTo(0, 0) } > OUR history </NavLink>
                             <NavLink onClick={ () => window.scrollTo(0, 0) } to='/WhoWeAd, 0e2'> CORE VALUE </NavLink>
                                <NavLink onClick={ () => window.scrollTo(0, 0) } to="/Construction"> CONSTRUCTION </NavLink>
                                <NavLink onClick={ () => window.scrollTo(0, 0) } to="/Engineering"> ENGINEERNG </NavLink>
                                <NavLink onClick={ () => window.scrollTo(0, 0) } to="/Procurment"> PROCURMENT </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4  contact text-center'>
                        <h4> Get in Touch </h4>
                        <form className='row '>
                            <div className=' col-12' >
                                <input type='text' placeholder="TYPE YOUR NAME" required />
                            </div>
                            <div className='col-12' >
                                <input type='password' placeholder="TYPE YOUR PASSWORD" required/>
                            </div>
                            <div className='col-12'>
                                <textarea placeholder='TYPE your MASSAGE' required></textarea>
                            </div>
                                <Button color='danger'> READ </Button>

                        </form>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer