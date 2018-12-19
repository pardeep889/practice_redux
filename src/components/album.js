import React from 'react';
import AlbumContainer from '../containers/album_container';


export default function Album(){

    const showCovers = (item) => (
        item.map((item,i) => (
            item.albums.map((item,i)=>(                
                 <div key={i}>                  
                    <img src={`/images/albums/${item.cover}`} alt="cover" height="300" width="300"/>
                    <div>id: {item.albumId}</div>
                    <div>Title: {item.title}</div>  
                    <div>Price: {item.price}$</div>
                 </div>
            ))
        ))
    )

    return(
        <AlbumContainer action={showCovers}/>
    )

}