import React from 'react';
import LastContainer from '../containers/last_container';

export default function Last(){

    const lastFunction = (data) => (
        data.map((item,i) => (
            <div key={i}>{item.name}</div>
        ))
    )

    return(
        <LastContainer action={lastFunction}/>
    )
}