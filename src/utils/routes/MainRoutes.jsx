import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ExploreComp from '../../components/explore/ExploreComp';
import Login from '../../components/homeComp/Login';
import Editor from '../../layout/Editor';
import ExploreScreen from '../../screens/explore/ExploreScreen';
import SingleCollectionScreen from '../../screens/explore/SingleCollectionScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import Blockchain from '../../components/upload/Blockchain';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route
          path="/explore/collection/user1"
          element={<SingleCollectionScreen />}
        />
        <Route path="/create/start" element={<Blockchain />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
