import React, { useEffect, useState} from 'react'
import './Services.css'
import { Logo, AllServices } from './Services'

const ServucesLogo = () => {
    const [ title, setTitle ] = useState('');

    // updata title 
    useEffect( () => {
        setTitle( document.title = 'all services' )
    }, []);

    return (
        <>
        <Logo />
        <AllServices />
        </>
    )
}

export default ServucesLogo