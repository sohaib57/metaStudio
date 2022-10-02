import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Table, TableContainer, Tbody, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

const PropertiesModal = ({ setStateOfParent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior] = useState('inside')
    const btnRef = React.useRef(null)
    // initial state
    const [addRow, setaddRow] = useState([{ type: '', name: '' }])
    // Row Type Handler
    const handleType = (e) => {
        console.log(e.target.value)
        addRow.type = e.target.value
    }
    // Row Name Handler
    const handleName = (e) => {
        console.log(e.target.value)
        addRow.name = e.target.value
    }
    // Set Row Data
    const addRowFunc = (character, name) => {
        setaddRow(oldArray => [...oldArray, { type: addRow.type, name: addRow.name }]);
    }


    return (
        <>
            {/* Add Properties Modal Button */}
            <Button mt={3} ref={btnRef} onClick={onOpen} _hover={{ borderColor: '#ffffff33' }} borderRadius={'full'} background={'transparent'} color={'white'} border={'1px solid #ffffff1a'} _focus={{}} _active={{}} fontWeight={'medium'}>
                Add Properties
            </Button>
            {/* Modal Container */}
            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={scrollBehavior}
                size={'lg'}
            >
                <ModalOverlay />
                <ModalContent bgColor={'#282C4B'} color={'white'}>
                    <ModalHeader textAlign={'center'}>Add Properties</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb={'6'}>Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.</Text>
                        {/* Table Area for inputs */}
                        <Stack>
                            {addRow?.map(({ type, name }) => (
                                <Stack direction={'row'}>
                                    <Input value={addRow.type} placeholder={'Character'} size='md' onChange={(e) => handleType(e)} />
                                    <Input value={addRow.name} placeholder={'Name'} size='md' onChange={(e) => handleName(e)} />
                                </Stack>
                            ))}
                        </Stack>
                    </ModalBody>
                    <ModalFooter color={'#282C4B'} justifyContent="space-between">
                        <Button id="addBtn" bgColor={'#E2E8F0'} onClick={() => addRowFunc()}>ADD</Button>
                        <Button onClick={() => {
                            onClose()
                            addRowFunc()
                            setStateOfParent(addRow)
                        }} bgColor={'#E2E8F0'}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PropertiesModal