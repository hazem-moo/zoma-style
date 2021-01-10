import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './Components/Home/Index'
import Navbar from './Components/Navbar/Navbar'
// start Services 
import ServicesAndLogo from './Components/Services/Services&&Logo'
import Construction from './Components/Services/Construction' 
import Procurement from './Components/Services/Procurement' 
import Engineering from './Components/Services/Engineering'

// start Who we ade 
import WhoWeAde from './Components/Who we ade/WhoWeAde'
import WhoWeAde2 from './Components/Who we ade/WhoWeAde2'

import News from './Components/News/News'
import Contact from './Components/Contact us/Contact'
import Footer from './Components/Footer/Footer';

// import ScrollTop from './Components/ScrollTop/ScrollTop'

function App() {  

  return (
    <BrowserRouter className="App">
      <Navbar />
      {/* <ScrollTop /> */}

      <Switch>
        <Route exact path="/" component={ Index } />

        <Route path='/ServicesLogo' component={ ServicesAndLogo } />
        <Route path='/Construction' component={ Construction } />
        <Route path='/Procurement' component={ Procurement } />
        <Route path='/Engineering' component={ Engineering } />

        <Route path='/WhoWeAde' component={ WhoWeAde } />
        <Route path='/WhoWeAde2' component={ WhoWeAde2 } />

        <Route path='/News' component={ News } />
        <Route path='/Contact' component={ Contact } />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
