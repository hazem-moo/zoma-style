import React, { useEffect, useState } from 'react';
import './WhoWeAde.css';
import logo from '../Ather-images/8.jpg'
import logo10 from '../images/10.jpg'
import informatiom from '../data/information.json'

const DataItem = informatiom.information

const WhoWeAde = () => {

    let [ title, setTitle ] = useState('');

    // updata title 
    useEffect( () => {
      document.title = "our core"
        }, [title]);

   
    
    return (
        <section  className=" history-info " >
            <div className="img-history ">
                <h2 > CORE VALUES </h2>
                <p >
                    If you’d like to talk to us about a project, or anything else, we’d love to hear from you.
                </p>
                <div ></div>
                <img src={ logo } className="w-100 mb-1" alt="" />
            </div>
            
            <div className='container' >
                <div className="row history" >
                    <aside className=" col-lg-3" >
                        <div className='info'>
                            <h5 > OUR OFFICE </h5>
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
                    </aside>

                    <div className="col-lg-5">
                        <img src={ logo10 } alt="" width="100%" />
                     </div>
                    <div className="col-lg-4 text-center">
                        <div >
                            <h2> OUR VISION </h2>
                            <p>
                                To be the quintessential EPC contractor in the local Market by espousing a Genuine Egyptian Business Role Model that embraces the international standards and fosters value-added innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" >
                { 
                    DataItem.map( ({ icon, img, header, text, indx }) => {
                        return (
                            <div className="col-lg-6 " key={ indx } >
                                <div className="my-core">
                                    <i className={ icon }></i>
                                    <h4 > { header } </h4>
                                    <p> { text } </p>
                                </div>
                            </div>
                        )
                    })
                
                 }
            </div>
        </section>
    )
}

export default WhoWeAde; 