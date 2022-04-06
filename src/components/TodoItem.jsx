import React, {useState} from 'react';

export default function TodoItem(props) {

    return (
        <li onClick= {() => props.onCheck(props.id)}>
            {props.item}
        </li>
    );
}


