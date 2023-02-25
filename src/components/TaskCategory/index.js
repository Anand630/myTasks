import './index.css'

const TaskCategory = props => {
  const {categoryDetails, updateActiveTab} = props
  const {optionId, displayText} = categoryDetails
  const onCategoryClick = () => {
    updateActiveTab(optionId)
  }
  return (
    <li className="category-item">
      <button
        onClick={onCategoryClick}
        className="category-button"
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TaskCategory
