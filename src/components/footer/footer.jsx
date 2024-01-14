import React from 'react'
import './footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <fooer className="footer">
            Copyright &#169; {currentYear} Akshay Sujgure. All rights reserved.
        </fooer>
    )
};

export default Footer;