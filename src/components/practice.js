import React from 'react';
import PracticeContainer from '../containers/practice_container';
export default function Practice(){

    const practiceAction  = (data) =>(
        data.map((item,i)=> (
            item.albums.map((data,i) => (
                <div key={i} className="container">
          
                    <div className="col-sm-6"> <b> Artist Name:</b> {item.name}</div>
                    <div className="col-sm-6"> <b>Album Name:</b> {data.title}</div>          
              
                </div>
            ))
        )
         
        )
    )

    return(
        <PracticeContainer action={practiceAction}/>
    )
}