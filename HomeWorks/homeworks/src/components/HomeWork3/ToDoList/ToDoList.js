import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import './ToDoList.css';

function ToDoList() {
    const [task, setTask] = useState('');
    const [tasksArray, setTasksArray] = useState([]);

    const handleInput = (e) => {
        setTask(e.target.value);
    }

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTasksArray([...tasksArray, { id: uuidv4(), task: task }]);
            setTask('');
        } else {
            alert('Enter task!');
        }
    }

    const handleDeleteTask = (id) => {
        setTasksArray(tasksArray.filter(task => task.id !== id));
    }


    return (
        <div className="ToDoList-wrap">
            <div className="input-wrap">
                <TextField
                    id="outlined-basic"
                    label="Enter task"
                    variant="outlined"
                    value={task}
                    onChange={handleInput}
                />
                <Button variant="contained" onClick={handleAddTask}>Add task</Button>
            </div>
            <div className="tasks-wrap">
                {tasksArray.map((taskItem) =>
                    <Card variant="outlined" key={taskItem.id} className="card">
                        <CardContent className="card-content">
                            <Typography variant="h5" component="div">
                                {taskItem.task}
                            </Typography>
                            <DeleteIcon onClick={() => handleDeleteTask(taskItem.id)} />
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default ToDoList;