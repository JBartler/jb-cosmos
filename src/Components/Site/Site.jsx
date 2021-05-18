import React from 'react'

import Navbar from '../Navbar/Navbar';
import BgcElements from '../BgcElements/BgcElements'
import Links from '../Links/Links'
import Illustration from '../Illustration/Illustration'
import Footer from '../Footer/Footer'

import '../Site/Site.css'

export default function Site() {
    return (
        <div className='container'>
            <BgcElements />
            <Navbar />
            <Links />
            <Illustration />
            <Footer />
        </div>
    )
}
