import React from 'react';
import loading from '../asset/loadingAnimation.gif';
class Loading extends React.Component{
    render(){
        return(
            <div className="loading">
                <img src={loading} alt="loading.."  />
                {/* <h2>Loading...</h2> */}
            </div>
    );
    }
}

export default Loading;