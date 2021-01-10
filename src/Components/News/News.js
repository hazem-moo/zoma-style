import React, { Fragment, useEffect, useState } from 'react';
import './News.css';
import Logo from '../images/10.jpg'
import { news } from '../data/news'

const News = () => {
    const [ title, setTitle ] = useState('');

    useEffect( () => {
        document.title = "news"
    }, [])

    const totalInfo = news.map( ( { img, header, text, index } ) => {
        return (
            <Fragment key={ index } >
                <div className="col-lg-12 " >
                    <div className='news w-100'>
                        <img alt='' src={ img } width="100%" />
                        <h4> { header } </h4>
                        <p> { text } </p>
                    </div>
                </div>
            </Fragment>
        )
    })

    return (
        <>
        <section className="logo-news" >
            <div className='overlay'></div>
            <h2> NEWS </h2>
            <p> If you’d like to talk to us about a project, or anything else, we’d love to hear from you. </p>
            <img src={ Logo } className='w-100' alt='' />
        </section>

        <section className="container my-news" >
            <div className="row" >
                { totalInfo }
            </div>
        </section>
        </>
    )
    
}

export default News;