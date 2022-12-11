import React from 'react';
import './ContactMe.css'
import contactBanner from '../../Assets/contact-banner.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ContactMe = () => {
    return (
        <div className="hero min-h-screen" style={
            {
                backgroundImage: `url("${contactBanner}")`
            }
        }>
            <div className="hero-content text-center text-neutral-content glassEffect md:mx-0 mx-4">
                <div data-aos="fade-up" className='mx-auto w-full mary p-10 rounded-lg'>
                    <h2 data-aos="fade-up" className='mb-5 md:text-5xl text-3xl font-bold text-primary'>Feel free to contact with me</h2>
                    <form action="https://formspree.io/f/mzbwnklw" method='post'>
                        <div data-aos="fade-up" className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base-100 text-lg">What is your name?</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full max-w-xs text-slate-600" required />
                        </div>
                        <div data-aos="fade-up" className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base-100 text-lg">What is your email?</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs text-slate-600" required />
                        </div>

                        <div data-aos="fade-up" className="form-control">
                            <label className="label">
                                <span className="label-text text-base-100 text-lg">Your message</span>
                            </label>
                            <textarea name='message' className="textarea textarea-bordered h-24 text-slate-600" placeholder="Write your message..." required></textarea>

                        </div>

                        <input data-aos="fade-up" type="submit" value="Send" className='btn w-full mt-4' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactMe;