import React from 'react';

 const Table = (props) => {
    const dat = props.dat;
    const ar = [];
    for (var i=0; i<dat.length; i++){
        var {category, price, name} = dat[i];
        ar.push(<tr key={i}>
            <td>{category}</td>
            <td>{price}</td>
            <td>{name}</td>
        </tr>);
    }
    return <table>
        <tbody>
        <tr>
            <td>Name</td>
            <td>Price</td>
        </tr>
        {ar}
        </tbody>
    </table>
 };
export default Table;
