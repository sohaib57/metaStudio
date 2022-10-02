import { Button, Input, Stack } from '@chakra-ui/react'
import React from 'react'

const PriceRange = () => {
    return (
        <>
            <Stack align={'center'} p={'4'} bgColor={'#f2f2f3'} borderRadius={'md'}>
                {/* price range inputs */}
                <Stack direction={{ base: 'column', md: 'row' }} spacing={'2'}>
                    <Input placeholder='Min' borderRadius={'lg'} bgColor={'white'} boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'} />
                    <Input placeholder='Max' borderRadius={'lg'} bgColor={'white'} boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'} />
                </Stack>
                {/* Apply filter button */}
                <Button bgColor={'#8395a75c'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }}>Apply</Button>
            </Stack>
        </>
    )
}

export default PriceRange