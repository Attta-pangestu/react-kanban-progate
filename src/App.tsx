import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenu from './components/SideMenu'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div style={{ display: 'flex' }}>
          <SideMenu /> 
          <h1>Home</h1>
        </div>
      ),
    },
    {
      path: 'task-list',
      element: (
        <div style={{ display: 'flex' }}>
          <SideMenu /> {/* Ditambahkan */}
          <h1>Task List</h1>
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
  ])

  return <RouterProvider router={router} />
}

export default App
