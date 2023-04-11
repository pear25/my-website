import burger from '../assets/burger-right.svg'
import close from '../assets/close.svg'
import { useState } from 'react';

const Navbar = () => {
    const [logo, setLogo] = useState(burger)
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="flex flex-row h-24 p-4">
            <div className="flex-initial" id="logo">
                <span className="font-mono text-2xl">
                    🍐 Pear
                </span>
            </div>
            <div className="hidden sm:flex flex-end ml-auto" id="logo">
                <span className="font-mono text-lg">
                    <a>
                        about me
                    </a>
                </span>
                <span className="font-mono text-lg mx-8">
                    <a>
                        reach
                    </a>
                </span>
            </div>


            <div className="sm:hidden flex flex-end ml-auto" id="logo">
                <img src={logo} className='h-[24px]' onClick={() => {
                    setShowModal(!showModal)
                    setLogo(showModal === false ? close : burger)
                }} />
            </div>
            {showModal &&
                <div className={`h-screen bg-gray-800`}>
                    <div className="absolute inset-y-0 left-0 w-full max-w-md">
                        <div className="bg-white shadow-lg">
                            <div className="flex flex-row p-4">
                                <div className="flex-initial" id="logo">
                                    <span className="font-mono text-2xl">
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
                                <p className="text-sm text-gray-700 font-mono">about me</p>
                                <p className="text-sm text-gray-700 font-mono">reach</p>

                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Navbar