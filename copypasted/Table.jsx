import React from 'react';


const Table = (props) => {  // { key: value }  <Component key="value"  />
    let trArray = [];
    let prevCategory = undefined;

    props.items.forEach((obj) => {
        const category = obj.category;

        if (category !== prevCategory) {
            trArray.push(<Category category={category}></Category>);
            prevCategory = category;
        }
        trArray.push(<Row name={obj.name} price={obj.price}></Row>);
    });

    return (
        <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
            {trArray}
        </tbody>    
        </table>
    );
};

const Category = (props) => (
    <tr>
        <td colSpan="2">{props.category}</td>
    </tr>
);

const Row = (props) => (
    <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
    </tr>
);

export default Table;
