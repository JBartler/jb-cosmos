import React from 'react'

import Navbar from '../Navbar/Navbar';
import BgcElements from '../BgcElements/BgcElements'
import Links from '../Links/Links'
import Footer from '../Footer/Footer'
import GlobalStore from '../Store/GlobalStore';

import '../Site/Site.css'


export default function Site() {
    return (
        <div className='container'>
            <BgcElements />
            <Navbar />
            <GlobalStore>
                <Links />
            </GlobalStore>
            <Footer />
        </div>
    )
}
