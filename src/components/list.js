import React from "react";
import Listcontainer from '../containers/list_container';
const List = () => {

    const renderlist = (item) => (
        item.map((item,i) => (
            // console.log(item)
            <div key={i}>
                {item.name}
            </div>
        ))
    )


    return(
        <Listcontainer action = {renderlist}/>
    )
}

export default List;