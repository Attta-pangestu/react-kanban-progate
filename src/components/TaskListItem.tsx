import type { Task, CSSProperties } from '../types'
import { getIconStyle } from '../utils/styleUtil'
import { getProgressCategory } from '../utils/progressUtil'
import { useTaskHandlers } from '../hooks/taskHooks'

interface TaskListItemProps {
  task: Task
}

const TaskListItem = ({ task }: TaskListItemProps): JSX.Element => {
  const {completeTaskHandler} = useTaskHandlers()
  
  return (
    <div style={styles.tableBody}>
      <div style={styles.tableBodyTaskTitle}>
        <span className="material-icons" style={getIconStyle(task.progressOrder)} onClick={() : void => completeTaskHandler(task.id as number)}>
          check_circle
        </span>
        {task.title}
      </div>
      <div style={styles.tableBodyDetail}>{task.detail}</div>
      <div style={styles.tableBodyDueDate}>{task.dueDate}</div>
      <div style={styles.tableBodyprogress}> {getProgressCategory(task.progressOrder)}</div>
      <div>
        <span className="material-icons" style={styles.menuIcon}>
          more_horiz
        </span>
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  tableBody: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #D8D8D8',
    fontSize: '12px',
    position: 'relative',
  },
  tableBodyTaskTitle: {
    fontSize: '12px',
    width: '15%',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    overflowWrap: 'anywhere',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyDetail: {
    width: '30%',
    padding: '16px',
    overflowWrap: 'anywhere',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyDueDate: {
    width: '10%',
    padding: '16px',
    borderRight: '1px solid #D8D8D8',
  },
  tableBodyprogress: {
    width: '15%',
    padding: '16px',
  },
  menuIcon: {
    cursor: 'pointer',
  },
}

export default TaskListItem
