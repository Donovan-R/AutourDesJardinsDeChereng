import React, { useState, useEffect, useRef } from 'react';
import { linksPublic, linksPrivate } from '../src/data';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '.././assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (isOpen) {
      contRef.current.style.height = linksHeight + 'px';
    } else {
      contRef.current.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <img className='logo' src={logo} alt='logo jardins'></img>
            <button
              className='nav-toggle'
              title='toggle'
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className='links-container'
            ref={contRef}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ul className='links' ref={linksRef}>
              {linksPublic.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <NavLink
                      to={url}
                      className={({ isActive }) =>
                        isActive ? 'activeLink' : ''
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
