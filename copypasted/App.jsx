import React from 'react';


const Table = (props) =>{
    var items = props.items;
    var unical = {};

    for (var i=0; i<items.length; i++){
        var {category, name, price}= items[i];
        if( !(category in unical) ){
            unical[category] = [];
        }
        unical[category].push (<tr><td>{name}</td><td>{price}</td></tr>);
    }

    return(
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
            {/* <tr>
                <td colSpan="2">Sporting goods</td>
            </tr>
            {arr}
             <tr>
                <td>Electrinics</td>
            </tr>
            {ark}
            <tr> 
                <td>

                </td>
            </tr> */}
            {Object.values(unical)}
        </tbody>
    </table>
    )
}
export default Table
;
