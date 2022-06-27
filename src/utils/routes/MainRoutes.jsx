import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Editor from '../../layout/Editor'
import HomeScreen from '../../screens/home/HomeScreen'

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/editor' element={<Editor />} />
            </Routes>

        </>
    )
}

export default MainRoutes