import React from 'react';
import imageHalf from '../../Assets/image-half.webp'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero = () => {
    return (
        <div>
            <div className="grid grid-cols-2 h-[240px] md:h-[340px] lg:h-[550px] xl:-[900px]  bg-base-20 drop-shadow-lg relative bg-[#023E73]">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <div className='text-2xl md:text-4xl lg:text-5xl font-bold text-primary'>
                            <Typewriter
                                options={{
                                    strings: ["Hello, I'm <br/> Md. Abdul Kayum"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <p data-aos="fade-up" className='text-white xl:text-xl tracking-widest text-sm text-white/70'>
                            MERN Stack Developer
                        </p>

                    </div>
                </div>
                <div>
                    <img data-aos="fade-left"

                        className="  absolute bottom-0 md:right-4 lg:right-4 xl:right-10 right-7 w-48 md:w-64 lg:w-2/6 xl:w-auto " src={imageHalf} alt="kayumImage" />
                </div>

            </div>
        </div>
    );
};

export default Hero;