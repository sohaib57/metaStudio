import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Quantity from './Quantity'
import ReactSelectComp from './reactselect/ReactSelectComp'

const BodyFilters = () => {
    return (
        <>
            <Stack px={'2'} bgColor={'white'} borderRadius={'lg'} p={'2'}>
                <Accordion allowToggle allowMultiple>
                    <AccordionItem p={'0 !Important'}>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Background
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <ReactSelectComp />
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Body
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <ReactSelectComp />

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Element
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <ReactSelectComp />
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: '#0000000a' }} _active={{}} _focus={{}}>
                                <Box flex='1' textAlign='left'>
                                    Unique Name
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p={'0 !Important'}>
                            <ReactSelectComp />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Stack>
        </>
    )
}

export default BodyFilters