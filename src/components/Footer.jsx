import React from 'react';
import FooterImage from './FooterImage';

function Footer(props) {
    return (
        <div className='footer'>
            <div className="container">
                <div className="images">
                    <FooterImage />
                    <FooterImage />
                    <FooterImage />
                    <FooterImage />
                    <FooterImage />
                    <FooterImage />
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <p>Copyright © 2022 Mexant Co., Ltd. All Rights Reserved.</p>
                    <p>Designed by <span>Mujtaba Fadiel</span></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;