import React from 'react'
import { TASK_PROGRESS_ID } from '../constants/app'

export const getIconStyle = (progressOrder: number): React.CSSProperties => {
    const color: '#55C89F' | '#C5C5C5' =
      progressOrder === TASK_PROGRESS_ID.COMPLETED ? '#55C89F' : '#C5C5C5'
  
    const cursor: 'default' | 'pointer' =
      progressOrder === TASK_PROGRESS_ID.COMPLETED ? 'default' : 'pointer'
  
    return {
      color,
      cursor,
      fontSize: '28px',
      marginRight: '6px',
    }
  }