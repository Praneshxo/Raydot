import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import profile from '../images/profile.png';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';


function Header() {
    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            const element = titleRef.current;
            const text = element.textContent;
            element.textContent = '';

            // Split text into characters
            const chars = text.split('').map((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.display = 'inline-block';
                span.style.position = 'relative';
                element.appendChild(span);
                return span;
            });

            // Animate characters
            gsap.from(chars, {
                duration: 1,
                y: 100,
                autoAlpha: 0,
                stagger: 0.05,
            });
        }
    }, []);
    return (
        <div className='header-main'>
            <h2 className='title' ref={titleRef}>Hey Alan!</h2>
            <div className='head-link'>
                {/* Links section */}
                <div className='links'>
                    <NavLink to="/" exact activeClassName="active"> 
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink to="/report" activeClassName="active">
                        <h3>Lab reports</h3>
                    </NavLink>
                    <NavLink to="/hcare" activeClassName="active">
                        <h3>My Health Care</h3>
                    </NavLink>
                </div>
                {/* Right section (icons and profile) */}
                <div className='link-right'>
                    <NavLink to="/chatbot" activeClassName="active">
                        <FontAwesomeIcon icon={faBell} className='chatbot-icon'/>
                    </NavLink>
                    <NavLink to="/chatbot" activeClassName="active">
                        <FontAwesomeIcon icon={faRobot} className='chatbot-icon'/>
                    </NavLink>

                    <div className='profile'>
                        <img src={profile} className='image-my' alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
