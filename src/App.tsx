import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import {RecoilRoot} from 'recoil'
import TaskSummary from './components/TaskSummary'
import TaskList from './components/TaskList'
import TaskProgress from './components/TaskProgress/TaskProgress'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div style={{ display: 'flex' }}>
          <SideMenu /> 
         <TaskSummary/>
        </div>
      ),
    },
    {
      path: 'task-list',
      element: (
        <div style={{ display: 'flex' }}>
          <SideMenu /> 
          <TaskList />, 
        </div>
      ),
    },
    {
      path: 'task-progress',
      element: (
        <div style={{ display: 'flex' }}>
          <SideMenu /> {/* Ditambahkan */}
          <h1>Task Progress</h1>
        </div>
      ),
    },
    {
      path: '*', 
      element: (
        <div style={{ display: 'flex' }}>
        <SideMenu /> 
        <TaskProgress /> 
      </div>
      )
    }
   
  ])

  return (
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
