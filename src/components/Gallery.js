import React from 'react';
import Image from './Images';
import Loading from './Loading'
const Gallery = (props) =>{
    const results = props.data;

    
/* the condition below is set so a loading message is displayed while waiting for data from the API */
    if(!results){ 
     return(
        <div className="photo-container">
            <h2>Results</h2>
            <Loading />
        </div>
        );
    } else{
       let images =results.map(image => <Image key={image.id} url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}/>);
            if(images.length===0){ /* display a message if no match was found */
                return(
                    <div className="photo-container">
                        <h2>Results</h2>
                        <h3>No Match found</h3>
                    </div>
                )
            } else{
            return(
                <div className="photo-container">
                    <h2>Results</h2>
                    <ul>
                        {images}
                    </ul>
                </div>
            );
       }
    }
  
}


export default Gallery;