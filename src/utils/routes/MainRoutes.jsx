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
import Type from '../../screens/upload/Type';
import Upload from '../../screens/upload/Upload';
import SingleCollectionDetail from '../../screens/explore/SingleCollectionDetail';
import DashboardScreen from '../../screens/dashboard/DashboardScreen'
import ColorPicker from '../../components/ui/ColorPicker'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/colorpicker' element={<ColorPicker />} />
        <Route path='/explore' element={<ExploreScreen />} />
        <Route path='/explore/collection/user1' element={<SingleCollectionScreen />} />
        <Route path='/account' element={<ProfileScreen />} />
        <Route path='/settings' element={<ProfileSettingsScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route
          path="/explore/collection/user1"
          element={<SingleCollectionScreen />}
        />
        <Route
          path="/explore/collection/user1/details"
          element={<SingleCollectionDetail />}
        />
        <Route path="/create/blockchain" element={<Blockchain />} />
        <Route path="/create/start" element={<Type />} />
        <Route path="/create/upload" element={<Upload />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    </>
  )
}

export default MainRoutes;
