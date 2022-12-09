import React from 'react';
import imageHalf from '../../Assets/image-half.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero = () => {
    return (
        <div>
            <div className="grid grid-cols-2 xl:h-[600px] h-[240px] bg-base-20 drop-shadow-lg relative bg-[#023E73]">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h2 data-aos="fade-up" className='xl:text-5xl text-2xl font-bold text-primary'>
                            Hello! I'm<br />
                            Md. Abdul Kayum
                        </h2>
                        <p data-aos="fade-up" className='text-white xl:text-xl tracking-widest text-sm text-white/70'>
                            MERN Stack Developer
                        </p>
                    </div>
                </div>
                <div>
                    <img data-aos="fade-left"

                        className="  absolute bottom-0 xl:right-auto xl:right-10 right-7 xl:w-auto w-48" src={imageHalf} alt="kayumImage" />
                </div>

            </div>
        </div>
    );
};

export default Hero;