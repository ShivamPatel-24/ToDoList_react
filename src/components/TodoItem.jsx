import React, {useState} from 'react';

export default function TodoItem(props) {

    const[todo, setTodo] = useState(false);

    function handleTodo(){
        setTodo(!todo);
    }

    return (
        <li style={{textDecoration: todo ? 'line-through' : 'none'}} 
            onClick={handleTodo}>{props.item}
        </li>
  );
}


