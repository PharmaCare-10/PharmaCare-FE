import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { users } from "../../data/users.mock"
import { loginUser } from "../../utils/auth"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    )

    if (!foundUser) {
      setError("Invalid credentials")
      return
    }

    loginUser(foundUser)

    if (foundUser.role === "pharmacist") navigate("/app/pos")
    if (foundUser.role === "inventory") navigate("/app/inventory")
    if (foundUser.role === "admin") navigate("/app/reports")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-md shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
