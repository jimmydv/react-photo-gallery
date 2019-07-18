import React from 'react';

import {
    BrowserRouter as Router, 
    NavLink
} from 'react-router-dom';

const Nav =(props, match) => {


  
        return(
            <Router>
                <nav className="main-nav">
                    <ul> {/* NEED TO CREATE ROUTE FOR THESE LINKS - THEY WILL CHANGE THE KEYWORK IN THE FECTH API KEYWORD AND RELOAD NEW SET OF PICTURES. THE ACTIVE LINK SHOULD BE MARKED WITH A COLOR */}
                        <li onClick={()=> props.tagValueHandler('wild')} ><NavLink to='/wild' >Wild</NavLink></li>
                        <li onClick={()=> props.tagValueHandler('sunrise')} ><NavLink to='/sunrise' >Sunrise</NavLink></li>
                        <li onClick={()=> props.tagValueHandler('waterfall')} ><NavLink to='/waterfall'>Waterfall</NavLink></li>
                    </ul>
                </nav>

            </Router>  
    );
}

export default Nav;