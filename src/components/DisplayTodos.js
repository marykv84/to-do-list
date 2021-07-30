import React from 'react'
import { connect } from 'react-redux'
import { removeTodos, updateTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';



const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {

        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),

    }
}
const useStyles = makeStyles({
    container: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
    }
});
const DisplayTodos = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="sm">
            <List>
                {
                    props.todos.length > 0 ?
                        props.todos.map(item => {

                            return (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}

                                />
                            );
                        })
                        : null
                }
            </List>
            
            <Divider variant="middle" />
            <div>
        
        {
        props.todos.length === 0 ?  "No Task" : props.todos.length + " Tasks"
        }
        </div>
        </Container>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos)