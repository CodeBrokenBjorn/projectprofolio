import React, { useEffect } from 'react';
import "../css/style.css";

function ScrollHighlight() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav ul li a');

    const handleNavLinkClick = (event) => {
      event.preventDefault();
      const targetSectionId = event.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        const yOffset = -100; // Adjust the scroll offset as needed
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#section1">Section 1</a>
          </li>
          <li>
            <a href="#section2">Section 2</a>
          </li>
          <li>
            <a href="#section3">Section 3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ScrollHighlight;