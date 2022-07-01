import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

const Quantity = () => {
    return (
        <>
            <Stack align={'center'} p={'4'} bgColor={'#f2f2f3'} borderRadius={'md'}>
                {/* price range inputs */}
                <Stack direction={{ base: 'column', md: 'row' }} spacing={'2'}>
                    <Button borderRadius={'lg'} bgColor={'white'} boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'} >Single</Button>
                    <Button borderRadius={'lg'} bgColor={'white'} boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'} >Multiple</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Quantity