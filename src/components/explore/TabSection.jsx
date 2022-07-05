import { SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import './TabSection.css'
import CollectionCard from './CollectionCard'


const TabSection = () => {
    return (
        <>
            <Tabs align='center'>
                <TabList w={'fit-content'} border={'none'}>
                    <Tab _selected={{ borderColor: '#001529', borderBottomRadius: 'md', borderBottom: '5px solid' }} _focus={{ boxShadow: '0px', bgColor: 'inherit' }}>Trending</Tab>
                    <Tab _selected={{ borderColor: '#001529', borderBottomRadius: 'md', borderBottom: '5px solid' }} _focus={{ boxShadow: '0px', bgColor: 'inherit' }}>Top</Tab>
                    <Tab _selected={{ borderColor: '#001529', borderBottomRadius: 'md', borderBottom: '5px solid' }} _focus={{ boxShadow: '0px', bgColor: 'inherit' }}>Art</Tab>
                </TabList>

                <TabPanels py={'4'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                    {/* Trending Tab */}
                    <TabPanel display={'flex'} >
                        <SimpleGrid columns={{ base: '1', sm: '1', md: '2', lg: '3', '2xl': '5' }} spacing={'4'}>
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                        </SimpleGrid>
                    </TabPanel>
                    {/* Top Tab */}
                    <TabPanel display={'flex'} >
                        <SimpleGrid columns={{ base: '1', sm: '1', md: '2', lg: '3', '2xl': '5' }} spacing={'4'}>
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                        </SimpleGrid>
                    </TabPanel>
                    {/* Art Tab */}
                    <TabPanel display={'flex'} >
                        <SimpleGrid columns={{ base: '1', sm: '1', md: '2', lg: '3', '2xl': '5' }} spacing={'4'}>
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                            {/* Collectio Card */}
                            <CollectionCard />
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default TabSection