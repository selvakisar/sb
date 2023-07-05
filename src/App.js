import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Sidebar from "./components/Sidebar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditUser from "./components/EditUser";
import { useState } from "react";

function App() {
  let [users,setUsers] = useState([
    {
      name:'selva',
      email:'selva@gmail.com',
      mobile:'741852963',
      address:'123, noway Road, Dubai',
      batch:'B47WDT'
    },
    {
      name:'rajakrish',
      email:'krishka@gmail.com',
      mobile:'8521314001',
      address:'123, updown Cut Street, Dubai',
      batch:'B47WDT'
    },
    {
      name:'Ashwin',
      email:'ashwin@gmail.com',
      mobile:'8918902091',
      address:'432,black Street, Dubai',
      batch:'B47WDT'
    }
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>  
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
       </Routes>
      </div>
      </div>
    </div>
  </BrowserRouter>
  </>
}

export default App;