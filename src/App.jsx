import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Body from './components/Body';
import Login from './components/Login';
import Profile from './components/Profile';


const appRouters = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/profile',
        element: <Profile/>
      }
    ]
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={appRouters}/>
    </div>
  )
}

export default App;
