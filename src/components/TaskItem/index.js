import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {task, tag} = taskDetails
  return (
    <li className="each-task-container">
      <p className="task-title">{task}</p>
      <p className="tag-type-text">{tag}</p>
    </li>
  )
}

export default TaskItem
