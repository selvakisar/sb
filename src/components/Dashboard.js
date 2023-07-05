import React from 'react'
import Card from "./Card";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';

function Dashboard({users,setUsers}) {
  let navigate = useNavigate()
  let data = [
    {
      title:"Earnings (Monthly)",
      value:"$40,000",
      color:"primary",
      icon:"fa-calendar",
      isProgress:false
    },
    {
      title:"Earnings (Anual)",
      value:"$160,000",
      color:"success",
      icon:"fa-dollar-sign",
      isProgress:false
    },
    {
      title:"Task",
      value:"100%",
      color:"info",
      icon:"fa-clipboard-list",
      isProgress:true
    },
    {
      title:"Pending Request",
      value:"18",
      color:"warning",
      icon:"fa-comments",
      isProgress:false
    }
  ]

  let handleDelete = (i)=>{
    let newUsers = [...users]
    newUsers.splice(i,1)
    setUsers(newUsers)
  }
  return <>
     <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">

                {
                  data.map((e,i)=>{
                    return <Card key={i}
                    title={e.title}
                    value={e.value}
                    color={e.color}
                    icon={e.icon}
                    isProgress={e.isProgress}
                    />
                  })
                }

            </div>
      </div>
      <div className='container-fluid'>
     
      </div>
      
  </>
}

export default Dashboard