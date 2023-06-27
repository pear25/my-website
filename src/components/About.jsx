import Profile from '../assets/profile.png'
import BongoRight from "../assets/bongo_r.jpeg"
import Navbar from './Navbar';
import React from 'react';

const About = () => {

    const [avatar, setAvatar] = React.useState(Profile)

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <div onClick={() => { setAvatar(prev => prev === Profile ? BongoRight : Profile) }}>
                    <img src={avatar} className='h-[150px] border-2 p-4 border-gray-300 rounded-full' />
                </div>
                <div className='mt-6'>
                    <span className='text-3xl font-mono font-semibold hidden md:block'>Pierson Tarrantino Limas</span>
                    <span className='text-3xl font-mono font-semibold md:hidden block'>Pierson Lim</span>

                </div>
                <div className='my-6 space-y-2 font-light'>
                    <span className='block text-md'>Fullstack web dev</span>
                    <span className='block text-md'>CS undergrad @ CUHK</span>
                </div>

                <div className='mt-4 space-y-8 text-lg px-12'>
                    <div className='font-extralight'>
                        Hello and welcome to my about page! My name is Pierson, currently based in HK 🇭🇰 and am originally from Indonesia 🇮🇩. My interests lie in the fields of software development and data science, and I have been actively pursuing these interests throughout my academic and professional career.
                    </div>

                    <div className='font-extralight'>
                        In terms of software development, I have gained a wealth of experience through various programming projects and internships. I am proficient in multiple programming languages, including Java, Python, JavaScript and C, and I have developed applications ranging from web-based platforms to mobile applications. I am also highly skilled in software design and architecture, and I am always seeking to learn new tools and techniques to improve my programming skills.
                    </div>

                    <div className='font-extralight'>
                        I enjoy learning about AI and its day-to-day applications and have completed multiple courses in statistics and machine learning during my free time. I have hands-on experience with various data analysis tools and databases, including MySQL and Python.
                    </div>

                    <div className='font-extralight'>
                        Feel free to reach out to me as I'm always open to learn and explore new opportunities and connections or just for a casual chat!
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;