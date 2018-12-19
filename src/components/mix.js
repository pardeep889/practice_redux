import React from 'react';
import MixContainer from '../containers/mix_container';


export default function Mix(){

    const mixactions = (item) => (
        item.map((item,i) => (
            <div key={i}>
                {item.name}
            </div>
        ))
    )
    return(
        <MixContainer action = {mixactions}/>
    )
}