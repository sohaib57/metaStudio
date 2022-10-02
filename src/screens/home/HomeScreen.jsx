import React from 'react'
import Footer from '../../components/footer/Footer'
import Build from '../../components/homeComp/Build'
import HomeComp from '../../components/homeComp/HomeComp'
import NotableDrops from '../../components/homeComp/NotableDrops'
import TopCollection from '../../components/homeComp/TopCollection'
import TrendingNfts from '../../components/homeComp/TrendingNfts'

const HomeScreen = () => {
    return (
        <>
            <HomeComp />

            <NotableDrops/>

            <TopCollection/>

            <Build/>

            <TrendingNfts/>

            <Footer/>

        </>
    )
}

export default HomeScreen