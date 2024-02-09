import React, { useState } from 'react'
import { Input, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Todo = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [status, setStatus] = useState()
  const [todo, setTodo] = useState([])

  function submitTodo(){
    const previousTodo = [...todo];
    if (title != null && description != null && status != null) {
      previousTodo.push({
        title: title,
        description: description,
        status: status
      })
      setTodo(previousTodo)
    } 
  }

  return (
    <>
    <div>
      {todo.map((to) => (
        <div>
          <div>{to.title}</div>
        </div>
      ))}
    </div>
    <div className=' p-6 w-[40%] mx-auto'>
    <div>
    <Input size="large" placeholder="Enter title" prefix={<UserOutlined />} onChange={(e) => setTitle(e.target.value)} />
    <br />
    <br />
    <Input size="large" placeholder="Enter Description" prefix={<UserOutlined />} onChange={(e) => setDescription(e.target.value)} />
    <br />
    <br />
    <Select
      defaultValue="pending"
      style={{ width: 300, height: 45 }}
      onChange={(value) => setStatus(value)}
      options={[
        { value: 'pending', label: 'pending' },
        { value: 'active', label: 'active' },
        { value: 'completed', label: 'completed' },
      ]}
    />
    </div>
    <button onClick={() => submitTodo()}>Create Todo</button>
   </div>
    </>
   
  )
}

export default Todo