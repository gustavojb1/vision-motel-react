import React, { useState, useEffect } from 'react';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';




const Footer = () => {

    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  



  return (
    <>
      {windowSize.width > 768 ? <FooterDesktop /> : <FooterMobile />}
    </>
  );
};

export default Footer;
