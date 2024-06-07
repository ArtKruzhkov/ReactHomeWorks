// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchTasks } from "../reducers/taskSlice";

// function TasksList() {
//     const { items, loading, error } = useSelector((state) => state.tasks);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchTasks());
//     }, [dispatch]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="tasks-list-hw7">
//             <h4>Tasks</h4>
//             <ul>
//                 {items.map((task) => (
//                     <li key={task.id}>
//                         {task.title} {task.completed ? "(Completed)" : "(Pending)"}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default TasksList;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../reducers/tasksSlice";
import './TasksList.css';

function TasksList() {
    const { items, loading, error } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="tasks-list-hw7">
            <h4>Tasks</h4>
            <ul>
                {items.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        {task.title} {task.completed ? "(Completed)" : "(Pending)"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TasksList;

