import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/homeComp/Login'
import Editor from '../../layout/Editor'
import HomeScreen from '../../screens/home/HomeScreen'

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/login' element={<Login />} />
                <Route path='/editor' element={<Editor />} />
            </Routes>

        </>
    )
}

export default MainRoutes