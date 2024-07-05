import { TASK_PROGRESS_ID } from './../constants/app';
import { useRecoilState } from "recoil";
import { Task } from "../types";
import { taskState } from "../features/tasks/TaskAtoms";

export const useTaskHandlers = () => {
    const [tasks, setTasks] = useRecoilState<Task[]>(taskState);

    const updateTaskProgress = (taskId: number, progressId: number) => {
        const updatedTasks: Task[] = tasks.map(task =>
          task.id === taskId ? { ...task, progressOrder: progressId } : task
        );
        setTasks(updatedTasks);
      };
    
      const completeTaskHandler = (taskId: number): void => {
        updateTaskProgress(taskId, TASK_PROGRESS_ID.COMPLETED);
      };
      
      const moveMinusTaskProgress = (taskId: number, progressId: number): void => {
        updateTaskProgress(taskId, progressId - 1);
      }

      const movePlusTaskProgress = (taskId: number, progressId: number): void => {
        updateTaskProgress(taskId, progressId + 1);
      }
    
      const startTaskHandler = (taskId: number): void => {
        updateTaskProgress(taskId, TASK_PROGRESS_ID.NOT_STARTED);
      };
    
      const inProgressTaskHandler = (taskId: number): void => {
        updateTaskProgress(taskId, TASK_PROGRESS_ID.IN_PROGRESS);
      };
    
      const waitingTaskHandler = (taskId: number): void => {
        updateTaskProgress(taskId, TASK_PROGRESS_ID.WAITING);
      };

      return {
        completeTaskHandler,
        startTaskHandler,
        inProgressTaskHandler,
        waitingTaskHandler, 
        moveMinusTaskProgress, 
        movePlusTaskProgress
    };
}