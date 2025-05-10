import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './pages/Admin/Dashboard'
import ManageSchool from './pages/Admin/ManageSchool'
import CreateSchool from './pages/Admin/CreateSchool'
import UserDashboard from './pages/User/UserDashboard'
import MySchool from './pages/User/MySchool'
import ViewSchoolDetails from './pages/User/ViewSchoolDetails'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
          <Route path='/admin/dashboard' element={<Dashboard />}/>
          <Route path='/admin/school' element={<ManageSchool />}/>
          <Route path='/admin/create-school' element={<CreateSchool />}/>
          </Route>


          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
          <Route path='/user/my-schools' element={<MySchool />}/>
          <Route path='/user/schools-details:id' element={<ViewSchoolDetails />}/>
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
