import React, { useRef, useState } from 'react'
import ListItem from '@material-ui/core/ListItem';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';

const useStyles = makeStyles({

    delbutton: {
        margin: 10,
        color: "#ff4d4d"
    },
    savebutton: {
        margin: 10,
        color: "#33cc33"
    },
    editbutton: {
        margin: 10,
        color: "#0073e6"
    },
    textbox: {
        height: 30,
        marginRight: 10,
        width: 400,
    }
});

const TodoItem = (props) => {
    const classes = useStyles();
    const { item, updateTodo, removeTodo } = props;
    const inputRef = useRef(true);
    const inputRefDate = useRef(true);
    const [todoEditing , setTodoEditing] = useState(null);
    

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
        inputRefDate.current.disabled = false;
        inputRefDate.current.focus();
        setTodoEditing(item.id)
       
    };
    
    const update = (id, value , date) => {
        updateTodo({ id, item: value , date : date });
        inputRef.current.disabled = true;
        inputRefDate.current.disabled = true;
        setTodoEditing(null);
        


    };
    return (
        <ListItem key={item.id}>
            <input type='text' ref={inputRef} disabled={inputRef} defaultValue={item.item} className={classes.textbox} />
            <input type='date' ref={inputRefDate} disabled={inputRefDate} defaultValue={item.date} className={classes.textbox} />
            {item.id !== todoEditing ? (
            <IconButton className={classes.editbutton} onClick={() => changeFocus()}><EditOutlinedIcon /></IconButton> 
            ):(
            <IconButton className={classes.savebutton} onClick={() => update(item.id, inputRef.current.value, inputRefDate.current.date)}><SaveOutlinedIcon /></IconButton>
            )}
            <IconButton className={classes.delbutton} onClick={() => removeTodo(item.id)}><DeleteOutlineOutlinedIcon /></IconButton >
        </ListItem>
    )
}
export default TodoItem