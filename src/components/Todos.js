import React, { useState } from 'react'
import { addTodos } from "../redux/reducer";
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
        background: "#ffffff"
    },
    button: {
        marginTop: 16
    },
    textField:{
        marginRight:16,
        width:350,


    }
});

const mapStateToProps = (state) => {
    
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};



const Todos = (props) => {
    const [todo, setTodo] = useState("");
    const [date , setdate] = useState("2021-07-29")
    const classes = useStyles();

    const handleChange = (e) => {
        setTodo(e.target.value)


    }
    const handleChanged = (e) => {
        setdate(e.target.value)


    }

    function getId() {
        return props.todos.length ? props.todos[props.todos.length - 1].id + 1 : 1
    }
    return (
        <div className="addTodos">
            <Container maxWidth="sm" className={classes.root}>
                <Grid container alignItems="center">
                    <Grid item md={12}>
                        <TextField onChange={(e) => handleChange(e)} className={classes.textField} value={todo}
                            id="standard-basic" fullWidth label="Enter Task Name" multiline variant="standard" />
                        <TextField id="date"  label="DueDate"  type="date" value={date} onChange={(e) => handleChanged(e)} />
                    </Grid>

                    <Grid item md={12}>
                        <Button className={classes.button} variant="contained" color="primary" onClick={() => props.addTodo({

                            id: getId(),
                            item: todo,
                            date: date,
                            

                        })}>Add
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>





    )

}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);