import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ContactMe = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
                <div data-aos="fade-up" className='my-10 mx-auto w-full bg-primary p-10 rounded-lg shadow-lg'>
                    <h2 data-aos="fade-up" className='mb-5 text-5xl font-bold text-neutral'>Feel free to contact with me</h2>
                    <form action="https://formspree.io/f/mzbwnklw" method='post'>
                        <div data-aos="fade-up" className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base-100 text-lg">What is your name?</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div data-aos="fade-up" className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base-100 text-lg">What is your email?</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs" required />
                        </div>

                        <div data-aos="fade-up" className="form-control">
                            <label className="label">
                                <span className="label-text text-base-100 text-lg">Your message</span>
                            </label>
                            <textarea name='message' className="textarea textarea-bordered h-24" placeholder="Write your message..."></textarea>

                        </div>

                        <input data-aos="fade-up" type="submit" value="Send" className='btn w-full my-4' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactMe;