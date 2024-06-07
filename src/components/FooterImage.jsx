import React from 'react';
import S from "./images/S.png"

function FooterImage(props) {
    return (
        <div className='img'>
            <img src={S} height={50} width={100} alt="pic" />
        </div>
    );
}

export default FooterImage;