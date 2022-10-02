import React from 'react';
import {
  Stack,
  HStack,
  Text,
  Img,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import Pic from '../../../assests/images/1.jpg';

const FavoritiesModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack cursor={'pointer'} onClick={onOpen}>
        <AiFillHeart color="black" />
        <Text color={'black'}>11 favorites</Text>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <AiFillHeart color="black" />
              <Text color={'black'}>Favorited by</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody>
            <Stack gap={2} overflow={'auto'} h={'300px'}>
              <Stack direction={'row'} py={2}>
                <Img src={Pic} boxSize={'40px'} borderRadius={'full'} />
                <Stack lineHeight={1}>
                  <Text color={'black'}>User1</Text>
                  <Text color={'black'}>0x6178ea014...188D</Text>
                </Stack>
              </Stack>
              <Divider />
              <Stack direction={'row'} py={2}>
                <Img src={Pic} boxSize={'40px'} borderRadius={'full'} />
                <Stack lineHeight={1}>
                  <Text color={'black'}>User1</Text>
                  <Text color={'black'}>0x6178ea014...188D</Text>
                </Stack>
              </Stack>
              <Divider />
              <Stack direction={'row'} py={2}>
                <Img src={Pic} boxSize={'40px'} borderRadius={'full'} />
                <Stack lineHeight={1}>
                  <Text color={'black'}>User1</Text>
                  <Text color={'black'}>0x6178ea014...188D</Text>
                </Stack>
              </Stack>
              <Divider />
              <Stack direction={'row'} py={2}>
                <Img src={Pic} boxSize={'40px'} borderRadius={'full'} />
                <Stack lineHeight={1}>
                  <Text color={'black'}>User1</Text>
                  <Text color={'black'}>0x6178ea014...188D</Text>
                </Stack>
              </Stack>
              <Divider />
              <Stack direction={'row'} py={2}>
                <Img src={Pic} boxSize={'40px'} borderRadius={'full'} />
                <Stack lineHeight={1}>
                  <Text color={'black'}>User1</Text>
                  <Text color={'black'}>0x6178ea014...188D</Text>
                </Stack>
              </Stack>
              <Divider />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FavoritiesModel;
