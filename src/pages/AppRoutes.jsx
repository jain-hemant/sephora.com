import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    )
}
