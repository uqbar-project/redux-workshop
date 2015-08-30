import React from 'react';
import TaskCard from './TaskCard';

export default class TaskList extends React.Component {
  render() {
    let {title, tasks, onRemoveTask}  = this.props;
    function renderTask(task, index) {
      return <TaskCard key={index} task={task}
        onRemove={ () => onRemoveTask(task.key) }/>;
    }
    return <div className="taskList">
      <h2>{title}</h2>
      { tasks.map(renderTask) }
    </div>;
  }

}
