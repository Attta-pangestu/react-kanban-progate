import { useRecoilValue } from 'recoil'
import { taskState } from '../features/tasks/TaskAtoms'
import { CSSProperties, Task } from '../types'
import TaskListItem from './TaskListItem'
import { useEffect, useState } from 'react'
import TaskModal from './TaskModal'
import { TASK_MODAL_TYPE, TASK_PROGRESS_ID } from '../constants/app'

function TaskList() {
  const task: Task[] = useRecoilValue(taskState)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)



  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Tasks</h1>
      <div style={styles.taskButtons}>
        <button
          style={styles.button}
          onClick={(): void => {
            setIsModalOpen(!isModalOpen)
          }}
        >
          <span className="material-icons">add</span>
          Add task
        </button>
        <button style={styles.button}>
          <span className="material-icons">sort</span>Filter tasks
        </button>
      </div>
      <div>
        <div style={styles.tableHead}>
          <div style={styles.tableHeaderTaskName}>Task Name</div>
          <div style={styles.tableHeaderDetail}>Detail</div>
          <div style={styles.tableHeaderDueDate}>Due Date</div>
          <div style={styles.tableHeaderProgress}>Progress</div>
        </div>
        {task.map((task: Task) => {
          return <TaskListItem task={task} key={task.id.toString()} />
        })}
      </div>
      {isModalOpen && (
        <TaskModal
          type={TASK_MODAL_TYPE.CREATE}
          headingTitle="Add your task"
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
        />
      )}
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '20px',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  taskButtons: {
    display: 'flex',
    marginBottom: '30px',
    position: 'relative',
  },
  button: {
    padding: '16px',
    fontSize: '16px',
    marginRight: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  tableHead: {
    display: 'flex',
    fontSize: '18px',
    borderBottom: '1px solid #D8D8D8',
  },
  tableHeaderTaskName: {
    padding: '16px',
    width: '15%',
  },
  tableHeaderDetail: {
    padding: '16px',
    width: '30%',
  },
  tableHeaderDueDate: {
    padding: '16px',
    width: '10%',
  },
  tableHeaderProgress: {
    padding: '16px',
    width: '15%',
  },
}

export default TaskList
