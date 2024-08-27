import { useReducer, useState } from "react"

const intitalState = {count: 0};

function addTask(state, action){
    switch(action.type){
        case 'add':
            return {count: state.count+1};
    }
}

function Todo(){

    const [state, dispatch] = useReducer(addTask, intitalState);


    function handleAdd(){
        dispatch({
            type: 'add'
        })
    }
    


    return(
        <>
            <h1>Todo List</h1>
            <input type="text"/>
            <button onClick={handleAdd}>Add Task</button>
            {/* {state && state.map((item) => (
                <p>{item.task}</p>
            ))} */}

            <p>{state.count}</p>

        </>
    )
}

export default Todo;
