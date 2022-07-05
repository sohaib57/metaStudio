import { SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import CollectionSider from '../../explore/collectionSider/CollectionSider'
import SingleCollectionCard from '../../explore/singleCollection/SingleCollectionCard'

const NFTListing = () => {
    return (
        <>
            {/* Cards listing */}
            <Stack pt={'12'} direction={'row'} justify={'space-between'} h={'90vh'}>
                {/* sider */}
                <Stack w={'29%'} m={'0 !Important'} position={'sticky'} top={'1.25rem'} display={{ base: 'none', md: 'inherit' }} pl={'2'}>
                    <CollectionSider />
                </Stack>
                <Stack w={'full'} m={'0 !Important'} overflow={'auto'} css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}>
                    <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }} spacing={'1'}>
                        {/* Card */}
                        <SingleCollectionCard />
                        {/* Card */}
                        <SingleCollectionCard />
                        {/* Card */}
                        <SingleCollectionCard />
                        {/* Card */}
                        <SingleCollectionCard />
                        {/* Card */}
                        <SingleCollectionCard />
                        {/* Card */}
                    </SimpleGrid>
                </Stack>
            </Stack>
        </>
    )
}

export default NFTListing