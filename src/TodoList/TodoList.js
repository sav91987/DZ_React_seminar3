import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
/* import FolderList from "./FolderList"; */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function TodoList() {
    const [value, setValue] = useState("");
    const [tasksArr, setTasksArr] = useState([]);

    const updateText = (e) => {
        setValue((value) => e.target.value);
    };

    const addTask = () => {
        const addedTaskArray = [...tasksArr];
        addedTaskArray.push({
            id: crypto.randomUUID(),
            text: value,
        });
        setTasksArr(addedTaskArray);
        setValue("");
    };

    const removeTask = (id) => {
        const deletedTaskArray = tasksArr.filter((mess) => mess.id !== id);
        setTasksArr(deletedTaskArray);
    };

    return (
        <div className="container">
            <TextField
                fullWidth
                onChange={updateText}
                id="standard-basic"
                label="Введите текст"
                value={value}
            />
            <Button onClick={addTask} variant="outlined">
                Добавить
            </Button>

            <List sx={{ width: "100%" }}>
                {tasksArr.map((task) => (
                    <ListItem key={crypto.randomUUID()}>
                        <ChevronRightIcon />
                        <ListItemText primary={task.text} />
                        <IconButton
                            onClick={() => removeTask(task.id)}
                            aria-label="delete"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
export default TodoList;
