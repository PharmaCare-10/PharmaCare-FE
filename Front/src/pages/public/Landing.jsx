import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">PharmaCare</h1>
      <p className="text-gray-600 mb-6">
        A modern pharmacy POS and inventory management system
      </p>
      <button
        onClick={() => navigate("/login")}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  )
}

export default Landing
