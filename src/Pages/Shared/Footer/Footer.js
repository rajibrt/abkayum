import React from 'react';
import { Link } from 'react-router-dom';
import kayumImage from '../../../Assets/kayum.jpeg'

const Footer = () => {
    return (
        <div>
            <footer className="grid md:grid-cols-4 grid-cols-2 footer p-10 bg-base-200 text-base-content">

                <Link to='/' className="avatar flex items-center md:flex-row flex-col">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={kayumImage} alt='kayumImage' />
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Md. Abdul Kayum</a>
                </Link>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;