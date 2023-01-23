import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard/Dashboard'

function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default AppRoutes
