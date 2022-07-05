import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/homeComp/Login'
import Blockchain from '../../components/upload/Blockchain'
import Editor from '../../layout/Editor'
import ExploreScreen from '../../screens/explore/ExploreScreen'
import SingleCollectionScreen from '../../screens/explore/SingleCollectionScreen'
import HomeScreen from '../../screens/home/HomeScreen'
import ProfileScreen from '../../screens/profile/ProfileScreen'
import ProfileSettingsScreen from '../../screens/profile/ProfileSettingsScreen'

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/login' element={<Login />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/explore' element={<ExploreScreen />} />
                <Route path='/explore/collection/user1' element={<SingleCollectionScreen />} />
                <Route path="/create/start" element={<Blockchain />} />
                <Route path='/account' element={<ProfileScreen />} />
                <Route path='/settings' element={<ProfileSettingsScreen />} />
            </Routes>
        </>
    )
}

export default MainRoutes;
