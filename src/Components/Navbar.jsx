import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const navigate = useNavigate();

    
    const handleHome = () => { 
        navigate('/');
     };
   

    return (
        <nav className="z-[999] flex justify-center items-center fixed top-0 left-0 right-0">
            <div className="z-20 h-[65px] w-auto max-w-[900px] min-w-[70vw] backdrop-filter backdrop-blur-md bg-[rgba(255, 255, 255, 0.3)] border-2 border-solid shadow-2xl backdrop-blur-md border-white border-opacity-20 rounded-xl flex justify-between items-center mt-7 px-6">
                
                <div className="flex items-center space-x-6">
                    <div className="image">
                        <img onClick={handleHome} className='h-10 cursor-pointer' src="/assets/whiteLogo.png" alt="Logo" />
                    </div>
                    <div className="menu hidden md:flex">
                        <ul className='flex gap-6 text-sm font-semibold whitespace-nowrap text-white'>
                            <li onClick={handleHome} className='cursor-pointer hover:text-gray-300'>Home</li>
                        </ul>
                    </div>
                </div>

                <div className='font-extrabold text-xl '>
                    Film Gague
                </div>

                

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.3)] backdrop-blur-lg border-2 border-white border-opacity-20 shadow-2xl rounded-xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 md:hidden`}>
                <div className="flex justify-end p-5">
                    <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className='flex flex-col items-center gap-4 mt-10 text-lg font-semibold whitespace-nowrap text-white'>
                    <li onClick={handleHome} className='cursor-pointer hover:text-gray-300'>Home</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
