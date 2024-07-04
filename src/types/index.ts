export interface CSSProperties {
    [key: string]: React.CSSProperties
  }

export interface Task {
  id: Number,
  title: string, 
  detail: string, 
  dueDate: string, 
  progressOrder: number
}