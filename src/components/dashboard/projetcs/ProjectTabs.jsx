import { Divider, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import SingleCollectionCard from '../../explore/singleCollection/SingleCollectionCard'

const ProjectTabs = () => {
    return (
        <>
            <Tabs variant='unstyled' align='center' py={'6'} direction={'row'}>
                <TabList border={'1px solid'} w={'fit-content'} borderRadius={'lg'} p={'1'} overflow={'auto'} maxW={'100%'} my={'4'}>
                    <Tab _focus={{}} _active={{}} _selected={{ color: 'white', bgColor: 'black', borderRadius: 'lg' }}>Created</Tab>
                    <Tab _focus={{}} _active={{}} _selected={{ color: 'white', bgColor: 'black', borderRadius: 'lg' }}>Collected</Tab>
                    <Tab _focus={{}} _active={{}} _selected={{ color: 'white', bgColor: 'black', borderRadius: 'lg' }}>Favourited</Tab>
                </TabList>
                <TabPanels h={'100vh'} overflow={'auto'} css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}>
                    <TabPanel >
                        <Stack>
                            <SimpleGrid columns={{ base: '1', md: '2', lg: '4' }} spacing={'1'} >
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                            </SimpleGrid>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack>
                            <SimpleGrid columns={{ base: '1', md: '2', lg: '4' }} spacing={'1'} >
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                            </SimpleGrid>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack>
                            <SimpleGrid columns={{ base: '1', md: '2', lg: '4' }} spacing={'1'} >
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                                <SingleCollectionCard />
                            </SimpleGrid>
                        </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default ProjectTabs