import React from 'react';
import Image from '../asset/404_logo.gif';

const Notfound =() =>{
    return(
        <div className="phot-_container notfount">
            <p>oops</p>
            <img src={Image} alt="Page not found"/>
        </div>
    )
}
export default Notfound ;
