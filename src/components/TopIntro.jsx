import gif from '../assets/giphy.gif'
import logo from '../assets/ch_logo.png'
import hkstp from '../assets/hkstp.jpeg'
import moneed from '../assets/moneed.jpeg'
import { useRef, useEffect } from 'react';


const TopIntro = () => {

    return (

        <div className="flex flex-col md:flex-row rounded-2xl">
            <div className="flex md:w-1/2 w-full items-center justify-center">
                <div className='max-w-sm overflow-hidden rounded-xl shadow-xl'>
                    <img className="rounded-t-xl" src={gif} />
                    <div className='py-4 '>
                        <span className='p-4'>Stay Cool~</span>
                    </div>
                </div>

            </div>
            <div className="md:w-2/3 mt-12 md:mt-0 w-full p-4">
                <h1 className="block text-2xl font-semibold border-b border-gray-300">Welcome to my web, please take off your shoes. 🙏</h1>
                {/* <hr class="border-b border-gray-300 " /> */}

                <div className='mt-4'>
                    <span id="self-intro" className='block'>
                        A fullstack dev currently tinkering with data science and web3 development.
                    </span>
                </div>
                <div className='rounded-xl shadow-xl md:mt-8 p-4'>
                    <span className='block mb-2'>
                        My recent projects 📌:
                    </span>
                    <div className='flex flex-col md:flex-row gap-6 p-4'>
                        <div className='md:w-1/3 w-full'>
                            <a href='https://hello.careerhackers.io/pierson' target='_blank' rel='noopener noreferrer'>
                                <img src={logo} className='bg-black object-cover w-full h-full rounded-xl mb-4' />
                            </a>
                        </div>
                        <div className='md:w-1/3 w-full'>
                            <a href='https://hkstp.careerhackers.io/play' target='_blank' rel='noopener noreferrer'>
                                <img src={hkstp} className='overflow-hidden object-fit w-full h-full rounded-xl mb-4' />
                            </a>
                        </div>
                        <div className='md:w-1/3 w-full'>
                            <a href='https://github.com/pear25/moneed' target='_blank' rel='noopener noreferrer'>
                                <img src={moneed} className='overflow-hidden object-fit w-full h-full rounded-xl mb-4' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopIntro;