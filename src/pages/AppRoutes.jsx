import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import SingleProduct from './SingleProduct'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/products/:id' element={<SingleProduct />} />
        </Routes>
    )
}
