import burger from '../assets/burger-right.svg'
import close from '../assets/close.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CV from '../assets/CV/Pierson_CV_March.pdf'

const Navbar = () => {
    const navigate = useNavigate();
    const [logo, setLogo] = useState(burger)
    const [showModal, setShowModal] = useState(false)

    const downloadCV = () => {
        const blob = new Blob([CV], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="flex flex-row h-24 p-4">
            <div className="flex-initial" id="logo"
                onClick={() => navigate("/")}
            >
                <span className="font-mono text-2xl">
                    🍐 Pear
                </span>
            </div>
            <div className="hidden sm:flex flex-end ml-auto space-x-6" id="logo">
                <span className="font-mono text-lg">
                    <a onClick={() => navigate('/about')}>
                        showDetails()
                    </a>
                </span>
                <span className="font-mono text-lg">
                    <a onClick={() => navigate('/projects')} >
                        showProjects()
                    </a>
                </span>
                <span className="font-mono text-lg">
                    <a href={CV} download>
                        getCV()
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
                    <div className="absolute inset-y-0 left-0 w-full max-w-md">
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
                            <div className="px-4 py-4 space-y-4">
                                <p onClick={() => navigate('/about')} className="text-sm text-gray-700 font-mono">showDetails()</p>
                                <p className="text-sm text-gray-700 font-mono">
                                    <a href={CV} download>
                                        getCV()
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