// app/page.js
'use client'
import{globals} from './globals.css'
import { useState } from 'react'
import { addEmployeeApi } from './api/employeeApi'

export default function EmployeeForm() {
  const initialState={
    name: '',
    employee_id:'',
    email: '',
    phone: '',
    department: '',
    joinDate: '',
    role:''
  }
  const [formData, setFormData] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await addEmployeeApi(formData)
      console.log('Employee added:', result)
      // Reset form or show success message
      setFormData(initialState)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Employee Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
      {/* Name */}

        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        
      {/*employee_id*/}
        <div>
          <label className="block mb-1">employee_id</label>
          <input
            type="number"
            name="employee_id"
            value={formData.employee_id}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>


      {/*email*/}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        {/* phone */}
        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* dept        */}
        <div>
          <label className="block mb-1">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Department</option>
            <option value="ece">ece</option>
            <option value="cse">cse</option>
            <option value="it">it</option>
          </select>
        </div>
        

        {/* dateof join */}
        <div>
          <label className="block mb-1">Join Date</label>
          <input
            type="date"
            name="date_of_joining"
            value={formData.date_of_joining}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* roles        */}
        <div>
          <label className="block mb-1">role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select role</option>
            <option value="engine oil">engine oil</option>
            <option value="kadavuley">kadavuley</option>
            <option value="helicopter">helicopter</option>
          </select>
        </div>
        


        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
