import React from 'react';
import buynSell from '../../Assets/buyandsell.webp'
import onClick from '../../Assets/onClick.webp'
import quizzyPop from '../../Assets/quizypop.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HomeProjects = () => {
    return (
        <div className="my-10">
            <h2 data-aos="fade-up" className="md:text-3xl text-xl text-center mt-4 font-extrabold">You can check my project</h2>
            <p data-aos="fade-up" className="text-center font-sans border-2 border-info p-2 rounded-lg w-fit mx-auto mt-4">Mouse over the image for full design view</p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10  mx-auto w-full justify-items-center'>

                <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl transition ease-in-out delay-8000">
                    <figure><img className='h-80 w-full object-cover object-top transition-all hover:object-bottom hover:ease-in-out duration-[2s] hover:duration-[3s] cursor-pointer' src={buynSell} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Buy & Sell
                        </h2>
                        <div className="card-actions justify-end">
                            <p>Used phone buy & sell</p>
                        </div>
                    </div>
                    <a className='btn m-4' href="https://buynsell-34a2b.web.app" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='h-80 w-full object-cover object-top transition-all hover:object-bottom hover:ease-in-out duration-[2s] hover:duration-[5s] cursor-pointer' src={onClick} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            onClick
                        </h2>
                        <div className="card-actions justify-end">
                            <p>A personal service</p>
                        </div>

                    </div>
                    <a className='btn m-4' href="https://buynsell-34a2b.web.app" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='h-80 w-full object-cover object-top transition-all hover:object-bottom hover:ease-in-out duration-[1s] hover:duration-[2s] cursor-pointer' src={quizzyPop} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Quizzy Pop
                        </h2>
                        <div className="card-actions justify-end">
                            <p>Knowledge base website</p>

                        </div>
                    </div>
                    <a className='btn m-4' href="https://buynsell-34a2b.web.app" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>

            </div>
        </div>
    );
};

export default HomeProjects;