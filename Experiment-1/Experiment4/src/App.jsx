import { useState } from "react"
import "./App.css"

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  })

  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
  }

  return (
    <div className="container">
      <h2>Simple Form SPA</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="output">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
        </div>
      )}
    </div>
  )
}

export default App