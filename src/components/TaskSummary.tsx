import { useRecoilValue } from 'recoil'
import { taskState } from '../features/tasks/TaskAtoms'
import { CSSProperties, Task } from '../types'
import { completedTasksSelector, uncompletedTaskSelector } from '../features/tasks/TaskSelector'
import { Link } from 'react-router-dom'

const TaskSummary = (): JSX.Element => {
  const tasks: Task[] = useRecoilValue(taskState)
  const completedTask: Task[] = useRecoilValue(completedTasksSelector)
  const uncompletedTask: Task[] = useRecoilValue(uncompletedTaskSelector)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Summary of Your Tasks</h1>
      <div style={styles.list}>
        <span className="material-icons">check_circle</span>
        <h2>
          You have completed {completedTask.length} {completedTask.length <= 1 ? 'task' : 'tasks'}
        </h2>
      </div>
      <div style={styles.list}>
        <span className="material-icons">list</span>
        <h2>
          You still have {uncompletedTask.length} {uncompletedTask.length <= 1 ? 'task' : 'tasks'}{' '}
          left
        </h2>
      </div>
      <div style={styles.links}>
        <Link to="/task-list" style={styles.link}>
          See Your Task List
        </Link>
        <Link to="/progress-management" style={styles.link}>
          Manage Your Task Progress
        </Link>
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '40px',
    flex: 1,
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  list: {
    color: '#fff',
    backgroundColor: '#55C89F',
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
  },
  links: {
    display: 'flex',
  },
  link: {
    padding: '16px',
    marginRight: '24px',
    backgroundColor: '#55ACC8',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
  },
}

export default TaskSummary
