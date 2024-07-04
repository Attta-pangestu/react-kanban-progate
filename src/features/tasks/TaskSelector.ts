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
export const notStartedTasksSelector = selector<Task[]>({
  key: 'notStartedTasksSelector',
  get: ({ get }) => {
    const tasks = get(taskState);
    return tasks.filter(task => task.progressOrder === 1);
  },
});

export const inProgressTasksSelector = selector<Task[]>({
  key: 'inProgressTasksSelector',
  get: ({ get }) => {
    const tasks = get(taskState);
    return tasks.filter(task => task.progressOrder === 2);
  },
});

export const waitingTasksSelector = selector<Task[]>({
  key: 'waitingTasksSelector',
  get: ({ get }) => {
    const tasks : Task[] = get(taskState);
    return tasks.filter(task => task.progressOrder === 3);
  },
});

export const completedTasksSelector = selector<Task[]>({
    key: 'completed_tasks',
    get: ({ get }) => {
      return get(taskState).filter((task : Task) => {
        return task.progressOrder === 4
      })
    },
  })