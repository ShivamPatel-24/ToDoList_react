import React from 'react';

export default function TodoItem(props) {
    return (
    <div>
        <ul>
        {props.itemArr.map(item => <li>{item}</li>)}
        </ul>
    </div>
  );
}


