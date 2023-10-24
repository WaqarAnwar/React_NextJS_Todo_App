"use client"
import React, { useState } from 'react'

const page = () => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [task, settask] = useState([])

    const submit = (e) => {
        e.preventDefault()
        settask([...task, {title, description}])
        settitle("")
        setdescription("")
    }

    const deleteTask = (i) => {
        let copyTask = [...task]
        copyTask.splice(i, 1)
        settask(copyTask)

    }

    let renderTask = <h2> No Task Available </h2>
    if (task.length > 0){
        renderTask = task.map((t, i) => {
            return <li key={i} className='flex items-center justify-between'>   
            <div className='flex items-center justify-between mb-5 w-2/3'>
                <h1 className='text-2xl font-semibold'>{t.title}</h1>
                <p className='text-lg font-medium'>{t.description}</p>
            </div>
            <button onClick={() => {deleteTask(i)}} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
            </li>
        })
    }

  return (
    <>
    <h1 className='bg-teal-400 text-white p-5 text-2xl font-bold text-center'>Todo App</h1>
    <form onSubmit={submit}>
        <input type='text' onChange={(e) => {settitle(e.target.value)}} className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter title here' value={title}/>
        <input type='text' onChange={(e) => {setdescription(e.target.value)}} className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter description here' value={description}/>
        <button className='bg-teal-400 text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr/>
    <div className="p-8 bg-teal-100">
        <ul>
            {renderTask}
        </ul>
    </div>
    </>
  )
}

export default page