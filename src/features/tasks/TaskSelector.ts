import {selector} from 'recoil'
import { Task } from '../../types'
import { taskState } from './TaskAtoms'

export const uncompletedTaskSelector = selector<Task[]>({
    key: 'uncompleted_tasks',
    get: ({get}) => {
        return get(taskState).filter((task) => {
            return task.progressOrder !== 4
        })
    }
})

export const completedTasksSelector = selector<Task[]>({
    key: 'completed_tasks',
    get: ({ get }) => {
      return get(taskState).filter((task : Task) => {
        return task.progressOrder === 4
      })
    },
  })