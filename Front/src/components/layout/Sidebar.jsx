import { Link } from "react-router-dom"
import { getCurrentUser, logoutUser } from "../../utils/auth"

function Sidebar() {
  const user = getCurrentUser()

  return (
    <div className="w-60 bg-gray-800 text-white p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-6">PharmaCare</h2>

      {user?.role === "pharmacist" && (
        <Link className="block mb-3" to="/app/pos">POS</Link>
      )}

      {user?.role === "inventory" && (
        <Link className="block mb-3" to="/app/inventory">Inventory</Link>
      )}

      {user?.role === "admin" && (
        <Link className="block mb-3" to="/app/reports">Reports</Link>
      )}

      <button
        onClick={logoutUser}
        className="mt-6 text-sm text-red-400"
      >
        Logout
      </button>
    </div>
  )
}

export default Sidebar
