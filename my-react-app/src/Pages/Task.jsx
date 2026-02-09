import { useState } from "react";
// import Blackie from "./blackdrop";

export default function Task() {
  const [tasks, setTask] = useState([]);
  const [activity, setActivity] = useState("");
  // console.log("his");
  //Editting it now
  const[editTask,SetEditTask] = useState(null);
  const[editActivity,setEditActivity] = useState("")

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

 

  function deleteTask(id){
 console.log(id)
    setTask(tasks.filter((task) => task.id != id));
    console.log(tasks);
  }

//The Edit function




function saveActivity(x){

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
              className={task.isCompleted ? `task-item complete` : `task-item`}
            >
              <label>
                <input type="checkbox" onChange={() => toggleTask(task.id)} />
              </label>
              <span>{task.activity}</span>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  
                </button>
                <ul className="dropdown-menu">
                  <li onClick={()=> saveActivity(task)}>
                    <a className="dropdown-item edit" href="#">
                      Edit
                    </a>
                  </li>
                  <li onClick={()=> deleteTask(task.id)} >
                    <a className="dropdown-item delete" href="#">
                      Delete
                    </a>
                  </li>
               
                </ul>
              </div>

              {/* <button onClick={() => deleteTask(task.id)} className="login-btn">
                <i className="bi bi-x-lg"></i>
              </button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
