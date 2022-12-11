import React from 'react';
import { Link } from 'react-router-dom';
import kayumImage from '../../../Assets/kayum.jpeg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">

            <Link to='/' className="avatar mx-auto">
                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                    <img src={kayumImage} alt='kayumImage' />
                </div>
                <h2 className="text-xl text-center uppercase font-bold mx-auto">Md. Abdul Kayum</h2>
                <p className='text-center'>© 2022. All rights reserved by Md. Abdul Kayum</p>
            </Link>
        </footer>
    );
};

export default Footer;