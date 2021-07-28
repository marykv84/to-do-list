import React , {useRef}  from 'react'
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
    textbox:{
        height: 30,
        marginRight: 10,
        width: 400,
    }
});
const TodoItem = (props) => {
const classes = useStyles();
const {item, updateTodo,removeTodo} = props;
const inputRef = useRef(true);
    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };
    const update = (id,value) =>{
        updateTodo({id , item : value});
            inputRef.current.disabled = true;
       
    };
    return (
        <ListItem key={item.id}>
                <input type='text' ref={inputRef} disabled={inputRef} defaultValue={item.item} className={classes.textbox} /> 
                    
                  <IconButton className={classes.editbutton} onClick={() => changeFocus()}><EditOutlinedIcon/></IconButton>
                  <IconButton className={classes.savebutton} onClick={() =>update(item.id , inputRef.current.value )}><SaveOutlinedIcon/></IconButton>   
                  <IconButton   className={classes.delbutton}  onClick={() => removeTodo(item.id)}><DeleteOutlineOutlinedIcon /></IconButton >
        </ListItem>
    )
}
export default TodoItem