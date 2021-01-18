import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Button
} from 'reactstrap';
import { AllServices } from '../Services/Services'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css';

import logo10  from '../images/10.jpg'
import logo2 from '../images/2.jpg'
import logo1 from '../images/1.jpg'
import logo3 from '../images/3.jpg'

const items = [
  {
    src: `${logo1}`
  },
  {
    src : `${logo2}`
  },
  {
    src : `${logo3}`
  }
];

const Home = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  let [ title, setTitle ] = useState('');

  // updata title 
  useEffect( () => {
    setTitle( document.title= "Home") 
  }, []);

  // animatiom 
  useEffect( () => {
    Aos.init({ duration : 8000 , easing: 'ease' });
  }, [])

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="overlay"></div>
        <img src={ item.src } className="logo-slide" alt='' />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      {/* start who we ade2 */}
      <section className="who-we-ade2 container text-center ">
        <div className='row '>

          <div className="col-lg-6 oo" >
            <div className='perspective-img' data-aos='fade-up'>
              <img className="img-who-we-ade2" src={ logo10 } alt="" />
            </div>
          </div>

          <div className="col-lg-6 text-who " data-aos='fade-up' >
            <h3 className="header-who-we-ade2"> WHO WE ARE? </h3>
            <h5 className="header-who-we-ade2"> TEMC (Topic Electro-Mechanical Contracting): </h5>
            <p className="leed">
              TEMC is a result of more than 15 years of experience in engineering, procurement, construction, facility management and highly specialized in all integrated engineering solutions, founded by MR Bahgat Abo gresha and his team of highly experienced managers. TEMC provides the market with the professional services needed for optimized EPC turnkey solution
            </p>
            <Button color="danger" tag={ NavLink } to="/WhoWeAde2" > READ MORE </Button>
          </div>
        </div>
      </section>
      
      {/* end who we ade 2 */}
      <AllServices />
    </>

  );
}

export default Home;