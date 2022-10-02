import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Stack } from '@chakra-ui/react'
import React from 'react'
import BodyFilters from './BodyFilters'
import PriceRange from './PriceRange'
import Quantity from './Quantity'

const CollectionSider = () => {
    return (
        <>
            <Stack px={'2'} bgColor={'white'} borderRadius={'lg'} p={'2'} overflow={'auto'}>
                <Accordion allowToggle>
                    <AccordionItem p={'0 !Important'}>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Price Range
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <PriceRange />
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Quantity
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <Quantity />
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Body Filters
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <BodyFilters />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Body Filters
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <BodyFilters />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Body Filters
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <BodyFilters />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Body Filters
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <BodyFilters />
                        </AccordionPanel>
                    </AccordionItem>


                </Accordion>
            </Stack>
        </>
    )
}

export default CollectionSider