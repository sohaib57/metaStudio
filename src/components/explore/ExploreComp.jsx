import { Center, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../header/ProfileHeader'
import TabSection from './TabSection'

const ExploreComp = () => {
    return (
        <Stack minH={'100vh'} bgColor={'#F2F2F3'}>

            <ProfileHeader />
            <Stack h={'100%'} m={'0 !Important'}>
                <Center py={'4'}>
                    <Heading fontFamily={'unset'}>Explore NFT's Art</Heading>
                </Center>
                <Stack >
                    <TabSection />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ExploreComp