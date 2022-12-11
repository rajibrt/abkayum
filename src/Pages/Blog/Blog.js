import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Blog = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 data-aos="fade-up" className="mb-5 text-5xl font-bold">Blog</h1>
                    <p data-aos="fade-up" className="mb-5">Coming Soon</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;