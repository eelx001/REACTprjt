import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logo from './logo.png'
import React, { useState, useEffect, useRef } from 'react';
import { Label, Modal, TextInput, Checkbox, Button,Spinner, Navbar, Textarea } from 'flowbite-react';

function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  const hideDropdown = () => {
    setIsOpen(false);
  };
  

  return (
    <div>
      <nav className="navba dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   
          <a as={Link} className="flex items-center">
            <img src={Logo} className="h-12 mr-3" alt="Spotify" />
          </a>
          <div className="flex md:order-2">
         
          <button type="button" className="bn3637 bn37 no-outline" onClick={handleClick}>Contact Me</button>
       
            <button
              ref={dropdownRef}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/home" onClick={hideDropdown} className="aa block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Accueil</Link>
              </li>
              <li>
                <Link to="/page1" onClick={hideDropdown} className="aa block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projets</Link>
              </li>
              <li>
                <Link to="/page2" onClick={hideDropdown} className="aa block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Moi</Link>
              </li>
              <li>
                <Link to="/page3" onClick={hideDropdown} className="aa block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Choses aléatoires</Link>
              </li>             
              <button type="button" className="btndrop bndp" onClick={() => {
                handleClick();
                hideDropdown();
              }}>Login</button>
            </ul>
          </div>
        </div>
      </nav>
      

      <Modal show={showModal} size="md" popup={true} onClose={handleClose} className="logi fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex dark:bg-opacity-0 backdrop-blur-sm">
        <Modal.Header />
        <Modal.Body>
          <div className="dark logs space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium  dark:text-white text-gray-900" >
            <img src={Logo} className="h-9 mr-3" alt="Spotify" />
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" className="passlabel"/>
              </div>
              <TextInput id="email" placeholder="name@company.com" required={true} />
            </div>
            <div>
              <div className="mb-2 block ">
                <Label htmlFor="password" value="Your Message" className="msglabel" />
              </div>
              <Textarea id="password" type="password" required={true} />
            </div>
            
            <div className="w-full">
              <Button className='bn3637 bn37 mn' as={Link} to="/dashboard">Envoyer!</Button>
            </div>
        
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Nav;
