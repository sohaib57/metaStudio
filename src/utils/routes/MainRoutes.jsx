import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExploreComp from '../../components/explore/ExploreComp'
import Editor from '../../layout/Editor'
import ExploreScreen from '../../screens/explore/ExploreScreen'
import SingleCollectionScreen from '../../screens/explore/SingleCollectionScreen'
import HomeScreen from '../../screens/home/HomeScreen'

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/explore' element={<ExploreScreen />} />
                <Route path='/explore/collection/user1' element={<SingleCollectionScreen />} />
            </Routes>

        </>
    )
}

export default MainRoutes