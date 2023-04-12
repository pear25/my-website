import burger from '../assets/burger-right.svg'
import close from '../assets/close.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CV from '../assets/CV/Pierson_CV_March.pdf'
import Typer from './Typer';

const Navbar = () => {
    const navigate = useNavigate();
    const [logo, setLogo] = useState(burger)
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="flex flex-row h-24 p-4">
            <div className="flex-initial" id="logo"
                onClick={() => navigate("/")}
            >
                <span className="font-mono text-2xl">
                    <Typer text={["Pear 🍐"]}
                        colorful={false}
                        typingSpeed={100}
                        typingDelay={500}
                        eraseDelay={300 * 100 * 100}
                        eraseSpeed={200} />
                </span>
            </div>
            <div className="hidden sm:flex flex-end ml-auto space-x-6 text-lg" id="logo">
                <span className="font-mono">
                    <a onClick={() => navigate('/about')}>
                        about me.
                    </a>
                </span>
                <span className="font-mono">
                    <a onClick={() => navigate('/projects')} >
                        projects.
                    </a>
                </span>
                <span className="font-mono">
                    <a href={CV} download>
                        cv.
                    </a>
                </span>

            </div>


            <div className="sm:hidden flex flex-end ml-auto" id="logo">
                <img src={logo} className='h-[24px]' onClick={() => {
                    setShowModal(!showModal)
                    setLogo(showModal === false ? close : burger)
                }} />
            </div>
            {
                showModal &&
                <div className={`h-screen bg-gray-800`}>
                    <div className="absolute inset-y-0 left-0 w-full max-w-screen">
                        <div className="bg-white shadow-lg">
                            <div className="flex flex-row p-4">
                                <div className="flex-initial" id="logo">
                                    <span onClick={() => navigate('/')} className="font-mono text-2xl">
                                        🍐 Pear
                                    </span>
                                </div>
                                <div className="flex-end ml-auto" id="logo">
                                    <span className="font-mono text-2xl">
                                        <img src={logo} className='h-[24px]' onClick={() => {
                                            setShowModal(!showModal)
                                            setLogo(showModal === false ? close : burger)
                                        }} />
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 py-4 space-y-4 text-right">
                                <p onClick={() => navigate('/about')} className="text-sm text-gray-700 font-mono">about me</p>
                                <p onClick={() => navigate('/projects')} className="text-sm text-gray-700 font-mono">projects</p>
                                <p className="text-sm text-gray-700 font-mono">
                                    <a href={CV} download>
                                        cv
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
}

export default Navbar