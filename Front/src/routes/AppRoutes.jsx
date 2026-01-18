import { Routes, Route } from "react-router-dom"
import Landing from "../pages/public/Landing"
import Login from "../pages/public/Login"
import MainLayout from "../components/layout/MainLayout"
import ProtectedRoute from "./ProtectedRoute"

function DummyPage({ title }) {
  return <h1 className="text-2xl font-bold">{title}</h1>
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/app/pos"
        element={
          <ProtectedRoute>
            <MainLayout>
              <DummyPage title="POS Page" />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/app/inventory"
        element={
          <ProtectedRoute>
            <MainLayout>
              <DummyPage title="Inventory Page" />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/app/reports"
        element={
          <ProtectedRoute>
            <MainLayout>
              <DummyPage title="Reports Page" />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes
