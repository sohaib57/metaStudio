import React from 'react'
import Footer from '../../components/footer/Footer'
import Build from '../../components/homeComp/Build'
import HomeComp from '../../components/homeComp/HomeComp'
import NotableDrops from '../../components/homeComp/NotableDrops'
import TopCollection from '../../components/homeComp/TopCollection'

const HomeScreen = () => {
    return (
        <>
            <HomeComp />

            <NotableDrops/>

            <TopCollection/>

            <Build/>

            <Footer/>

        </>
    )
}

export default HomeScreen