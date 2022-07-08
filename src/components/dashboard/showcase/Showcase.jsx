import { Img, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'

const Showcase = ({ showcaseList }) => {
    console.log(showcaseList)
    return (
        <>
            <Stack>
                <SimpleGrid>
                    <Stack align={'center'} py={'2'}>
                        <SimpleGrid columns={{ base: '1', sm: '2', md: '3', lg: '4' }} spacing={'6'}>
                            {showcaseList.map((e, idx) =>
                                <Img src={e.photo} key={idx} w={'20rem'} />
                            )}
                        </SimpleGrid>
                    </Stack>
                </SimpleGrid>
            </Stack>
        </>
    )
}

export default Showcase