import { TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from "../constants/app"

export const getProgressCategory = (progressOrder: number): string => {
    switch (progressOrder) {
      case TASK_PROGRESS_ID.NOT_STARTED:
        return TASK_PROGRESS_STATUS.NOT_STARTED
      case TASK_PROGRESS_ID.IN_PROGRESS:
        return TASK_PROGRESS_STATUS.IN_PROGRESS
      case TASK_PROGRESS_ID.WAITING:
        return TASK_PROGRESS_STATUS.WAITING
      case TASK_PROGRESS_ID.COMPLETED:
        return TASK_PROGRESS_STATUS.COMPLETED
      default:
        return TASK_PROGRESS_STATUS.NOT_STARTED
    }
  }
  