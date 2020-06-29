import React, { Component } from 'react';

const  List = (props) => {

    return (
    <li>{props.name} {props.address.street}</li>
    )
}

export default List;