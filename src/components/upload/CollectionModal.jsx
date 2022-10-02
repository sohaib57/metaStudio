import React, { useState } from 'react';
import {
  Stack,
  Text,
  Img,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Input,
  Textarea,
  Avatar,
} from '@chakra-ui/react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const CollectionModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const imageHandleChange = e => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file)
      );

      setSelectedFiles(prevImages => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        file => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  const renderPhotos = source => {
    console.log('source: ', source);
    return source.map(photo => {
      return (
        <>
          <Stack >
            <Avatar size='xl' name='Christian Nwamba' key={photo} src={photo} />
          </Stack>
        </>
      );
    });
  };
  return (
    <>
      <Stack width={{ base: '100%', md: '30%' }} onClick={onOpen}>
        <Text color={'white'}>Choose collection</Text>
        <Stack
          border={'1px solid #ffffff1a'}
          _hover={{
            borderColor: '#ffffff33',
          }}
          borderRadius={'16px'}
          py={5}
          alignItems={'center'}
          cursor={'pointer'}
        >
          <AiOutlinePlusCircle color={'white'} size={40} />
          <Text color={'white'} fontSize={'md'}>
            Create
          </Text>
          <Text color={'#8c8c8c'}>ERC-721</Text>
        </Stack>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={'#282c4b'}>
          <ModalHeader color={'white'} fontSize={'2xl'}>
            Collection ERC-721
          </ModalHeader>
          <ModalCloseButton color={'white'} _focus={{}} />
          <ModalBody>
            <HStack>
              <Stack>{renderPhotos(selectedFiles)}</Stack>
              <Stack>
                <Text color={'#8c8c8c'}>
                  We recommend an image of at least 300x300. Gifs work too. Max
                  5mb.
                </Text>
                <Input
                  cursor={'pointer'}
                  color={'white'}
                  border={'none'}
                  _focus={{}}
                  _active={{}}
                  type={'file'}
                  onChange={imageHandleChange}
                />
              </Stack>
            </HStack>

            <Stack gap={4} pt={4}>
              <Stack>
                <Text color={'white'}>Display name (required)</Text>
                <Stack>
                  <Input
                    borderColor={'#ffffff1a'}
                    _hover={{
                      borderColor: '#ffffff33',
                    }}
                    borderRadius={'10px'}
                    type="text"
                    placeholder="Enter collection name"
                    color={'white'}
                    _focus={{}}
                  />
                </Stack>
              </Stack>

              <Stack>
                <Text color={'white'}>Symbol (required)</Text>
                <Stack>
                  <Input
                    borderColor={'#ffffff1a'}
                    _hover={{
                      borderColor: '#ffffff33',
                    }}
                    borderRadius={'10px'}
                    type="text"
                    placeholder="Enter Token Symbol"
                    color={'white'}
                    _focus={{}}
                  />
                </Stack>
              </Stack>

              <Stack>
                <Text color={'white'}>Description (Optional)</Text>
                <Stack>
                  <Textarea
                    color={'white'}
                    borderColor={'#ffffff1a'}
                    _hover={{
                      borderColor: '#ffffff33',
                    }}
                    borderRadius={'16px'}
                    _focus={{}}
                    placeholder="Spread some words about your token collection"
                  />
                </Stack>
              </Stack>

              <Stack alignItems={'center'}>
                <Button
                  bgColor={'transparent'}
                  borderRadius={'16px'}
                  border={'1px solid #ffffff1a'}
                  width={'fit-content'}
                  color={'white'}
                  _hover={{
                    border: '1px solid #ffffff33',
                    bgColor: 'transparent',
                    color: 'white',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  _active={{}}
                >
                  Create Collection
                </Button>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CollectionModal;
