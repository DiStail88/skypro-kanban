import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import AuthProvider from "./context/AuthProvider"
import TaskProvider from "./context/TaskProvider"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>
)
