import React from 'react'
import type { Task, CSSProperties } from '../../types' 
import { TASK_PROGRESS_ID } from '../../constants/app'
import { getIconStyle } from '../../utils/styleUtil'
import { useTaskHandlers } from '../../hooks/taskHooks'

interface TaskCardProps {
  task: Task
}

const getArrowPositionStyle = (progressOrder: number): React.CSSProperties => {
  const justifyContentValue: 'flex-end' | 'space-between' =
    progressOrder === TASK_PROGRESS_ID.NOT_STARTED ? 'flex-end' : 'space-between'
  return {
    display: 'flex',
    justifyContent: justifyContentValue,
  }
}

const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  const {completeTaskHandler, moveMinusTaskProgress, movePlusTaskProgress} = useTaskHandlers()

  return (
    <div style={styles.taskCard}>
      <div style={styles.taskIcons}>
        <div className="material-icons" style={getIconStyle(task.progressOrder)} onClick={() : void => completeTaskHandler(task.id as number)}>check_circle</div>
        <div className="material-icons" style={styles.menuIcon}>
          more_vert
        </div>
      </div>
      <p style={styles.taskTitle}>{task.title}</p>
      <div>
        <p>{task.detail}</p>
      </div>
      <div>
        <p>Due on {task.dueDate}</p>
      </div>
      <div style={getArrowPositionStyle(task.progressOrder)}>
        {task.progressOrder !== TASK_PROGRESS_ID.NOT_STARTED && (
          <button className="material-icons" onClick={(): void => {moveMinusTaskProgress(task.id as number, task.progressOrder)}}>chevron_left</button>
        )}
        {task.progressOrder !== TASK_PROGRESS_ID.COMPLETED && (
          <button className="material-icons" onClick={(): void => {movePlusTaskProgress(task.id as number, task.progressOrder)}}>chevron_right</button>
        )}
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  taskCard: {
    backgroundColor: '#C7EFD0',
    borderRadius: '12px',
    padding: '24px',
    margin: '12px 0',
    fontSize: '20px',
    overflowWrap: 'anywhere',
    position: 'relative',
  },
  taskIcons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuIcon: {
    cursor: 'pointer',
  },
  taskTitle: {
    fontSize: '30px',
  },
  arrowsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}

export default TaskCard