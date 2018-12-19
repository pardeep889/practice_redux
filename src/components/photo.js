import React from 'react';
import PhotoContainer from '../containers/photo_container';
const Photo = () => {

    const photoActionForProps = (item) => (
        item.map((item,i) => (
            <div key = {i}>
                <img width="250" height="250" src ={`/images/${item.cover}`} alt={`I am ${i}th`}/>
            </div>
        ))
    )
    return(
       <PhotoContainer action = {photoActionForProps}/>
    )
}

export default Photo;