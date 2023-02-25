import {Component} from 'react'
import './App.css'

import {v4 as uuid} from 'uuid'

import TaskCategory from './components/TaskCategory'
import TaskItem from './components/TaskItem'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const constants = {none: 'NONE'}

// Replace your code here
class App extends Component {
  state = {
    tasksList: [],
    taskTitle: '',
    tagName: tagsList[0].optionId,
    activeTab: constants.none,
  }

  submitTask = e => {
    const {taskTitle, tagName, tasksList} = this.state
    e.preventDefault()
    const taskObj = {task: taskTitle, tag: tagName, id: uuid()}
    tasksList.push(taskObj)
    this.setState({tasksList: [...tasksList], taskTitle: ''})
  }

  storeTask = e => {
    this.setState({taskTitle: e.target.value})
  }

  storeTag = e => {
    this.setState({tagName: e.target.value})
  }

  updateActiveTab = id => {
    this.setState({activeTab: id})
  }

  getFilteredTasksList = (tasksList, activeTab) => {
    if (activeTab !== constants.none) {
      return this.tasksList.filter(eachItem => eachItem.optionId === activeTab)
    }
    return tasksList
  }

  render() {
    const {tasksList, taskTitle, tagName, activeTab} = this.state
    console.log(taskTitle, tagName)
    console.log(tasksList)
    const tabFiltersTasksList = this.getFilteredTasksList(tasksList, activeTab)
    return (
      <div className="page-main-container">
        <form onSubmit={this.submitTask} className="left-container">
          <h1 className="create-task-heading">Create a task!</h1>
          <div className="label-input-container">
            <label className="label" htmlFor="taskTitle">
              Task
            </label>
            <input
              onChange={this.storeTask}
              value={taskTitle}
              placeholder="Enter the task here"
              id="taskTitle"
              className="title-input"
              type="text"
            />
          </div>
          <div className="label-input-container">
            <label className="label" htmlFor="taskType">
              Tags
            </label>
            <select
              onClick={this.storeTag}
              id="taskType"
              className="option-select-input"
              type="text"
            >
              {tagsList.map(eachOption => (
                <option value={eachOption.optionId} key={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </div>
          <div className="add-task-button-container">
            <button type="submit" className="add-button">
              Add Task
            </button>
          </div>
        </form>
        <div className="right-container">
          <h1 className="tags-heading">Tags</h1>
          <ul className="all-categories-list-container">
            {tagsList.map(eachOption => (
              <TaskCategory
                updateActiveTab={this.updateActiveTab}
                categoryDetails={eachOption}
                key={eachOption.optionId}
              />
            ))}
          </ul>
          <h1 className="tags-heading">Tasks</h1>
          <ul className="all-tasks-list-container">
            {tabFiltersTasksList.length === 0 ? (
              <p className="no-tasks-added">No Tasks Added Yet</p>
            ) : (
              tabFiltersTasksList.map(eachTask => (
                <TaskItem taskDetails={eachTask} key={eachTask.id} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
