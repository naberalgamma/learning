import React from 'react';
import Table from './App.jsx';
import ReactDOM from 'react-dom';

const data = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Shoes', price: '$99.99', stocked: true, name: 'Nike Air'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <Table items={data}></Table>,
    document.getElementById("root")
);

/**
 * 
 * @param {*} number 
 * @param {*} array 
 * return true if number exists
 */
function findNumberInArray(categoryToFind) {
 for (var i =0; i<data.length; i++){
    const obj = data[i];

    if (obj.category === categoryToFind) return true
    
 }
 return false;
}

console.log('true', findNumberInArray('Shoes'))
console.log('false', findNumberInArray('books'))
