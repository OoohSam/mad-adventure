import { useState } from "react";
// import Blackie from "./blackdrop";

export default function Task() {
  const [tasks, setTask] = useState([]);
  const [activity, setActivity] = useState("");
  // console.log("his");
  //Editting it now

  const [editTasksID, setEditTasksID] = useState(null);
  const [editActivity, setEditActivity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //check whether the Submission is a hoax or not
    if (!activity.trim()) return;

    const newTask = {
      id: Date.now(),
      activity: activity,
      isCompleted: false,
    };
    setTask([...tasks, newTask]);

    setActivity("");
    console.log(tasks);
  }

  function toggleTask(id) {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function deleteTask(id) {
    console.log(id);
    setTask(tasks.filter((task) => task.id != id));
    console.log(tasks);
  }

  //The Edit function
  //the Edit function is started when you press the edit button\
  //We want to setstate of that which we want to change
  //the task is editted one at a go

  function startEdit(task) {
    setEditTasksID(task.id);
    setEditActivity(task.activity);
  }

  function saveEdit(id) {
    setTask(
      tasks.map((task) => {
        task.id === id ? { ...task, activity: editActivity } : task;
      }),
    );
  }

  function deleteActivity() {
    console.log("Delete activity has been pressed ");
    setEditActivity("" )
    setEditTasksID(null)
  }

  return (
    <div className="dashboard-page">
      <form onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="text"
          value={activity}
          placeholder="Add a new Adventure..."
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="login-btn" type="submit">
          <i className="bi bi-box-arrow-in-left"></i>
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              // className={task.isCompleted ? `task-item complete` : `task-item`}
              className="task-item complete"
            >
              {editTasksID === task.id ? (
                <>
                  <input
                    value={editActivity}
                    onChange={(e) => setEditActivity(e.target.value)}
                    autoFocus
                  />

                  <button onClick={() => saveEdit(task.id)}>Save</button>
                  <button
                  onClick={deleteActivity}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => toggleTask(task.id)}
                    />
                  </label>
                  <span>{task.activity}</span>

                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <ul className="dropdown-menu">
                      <li onClick={() => startEdit(task)}>
                        <a className="dropdown-item edit" href="#">
                          Edit
                        </a>
                      </li>
                      <li onClick={() => deleteTask(task.id)}>
                        <a className="dropdown-item delete" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
