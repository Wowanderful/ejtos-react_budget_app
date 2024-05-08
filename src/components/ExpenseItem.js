import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const plusButton = {
        borderRadius: "50%",
        backgroundColor: "green",
        color: "white",
        fontWeight: "bold",
        border: "none",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        fontSize: "18px"
    }


    const minusButton = {
        borderRadius: "50%",
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
        border: "none",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "12px",
        paddingRight: "12px",
        fontSize: "18px"
    }

    

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
    

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
    
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={plusButton}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}style={minusButton}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
