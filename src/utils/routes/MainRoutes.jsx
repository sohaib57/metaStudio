import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ExploreComp from '../../components/explore/ExploreComp';
import Login from '../../components/homeComp/Login';
import Editor from '../../layout/Editor';
import ExploreScreen from '../../screens/explore/ExploreScreen';
import SingleCollectionScreen from '../../screens/explore/SingleCollectionScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import Blockchain from '../../screens/upload/Blockchain';
import Type from '../../screens/upload/Type';
import Upload from '../../screens/upload/Upload';
import SingleCollectionDetail from '../../screens/explore/SingleCollectionDetail';

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
        <Route
          path="/explore/collection/user1/details"
          element={<SingleCollectionDetail />}
        />
        <Route path="/create/blockchain" element={<Blockchain />} />
        <Route path="/create/start" element={<Type />} />
        <Route path="/create/upload" element={<Upload />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
