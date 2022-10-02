import React, { useContext, useState } from 'react';
import { Button, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import meta from '../../assests/images/metamask.svg';
import coinbase from '../../assests/images/coinbase.svg';
import walletconnect from '../../assests/images/walletconnect.png';
import ContextWallet from '../../context/WalletConnectCanvas';

const SignInModal = () => {

  const { connectWallet, walletAddress } = useContext(ContextWallet)
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        bgColor={'transparent'}
        borderRadius={'none'}
        border={'1px solid white'}
        color={'white'}
        _hover={{
          border: '1px solid white',
          bgColor: 'transparent',
          color: 'white',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        _active={{}}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {walletAddress ? "Connected" : "Connect Wallet"}
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        {overlay}
        <ModalContent bgColor={'#001529'} textColor={'white'}>
          <ModalHeader>Log in or Create an account</ModalHeader>
          <ModalCloseButton
            _focus={{
              boxShadow: 'none',
            }}
          />
          <ModalBody>
            <VStack align={'center'} justify={'center'}>
              <Button
                onClick={() => connectWallet()}
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
                py={5}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text>{walletAddress ? "Disconnect" : "Connect Metamask"}</Text>
                  <Img src={meta} boxSize={'6'} />
                </Stack>
              </Button>

              <Button
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text>Connect Coinbase</Text>
                  <Img src={coinbase} boxSize={'6'} />
                </Stack>
              </Button>

              <Button
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text> Connect WalletConnect</Text>
                  <Img src={walletconnect} boxSize={'6'} />
                </Stack>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
