import React from 'react';
import { Stack, VStack, Text, Button } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react';
import {
  SiIconify,
  BiText,
  BsCardImage,
  FaShapes,
  FaDrawPolygon,
  BsCodeSlash,
  GrYoutube,
  CgGhostCharacter,
  BiRectangle,
  BsTriangle,
  FaRegCircle,
  ImFont,
  VscSymbolColor,
  AiFillCloseCircle,
} from 'react-icons/all';
import FabricTextBox from '../objects/Shape/FabricTextBox';
import Image from '../objects/Shape/Image';
import FabricCircle from '../objects/Shape/FabricCircle';
import FabricRectangle from '../objects/Shape/FabricRectangle';
import FabricTriangle from '../objects/Shape/FabricTriangle';
import Pen from '../objects/drawings/Pen';
import ColorPicker from '../ui/ColorPicker';
import ChangeFonts from '../ui/ChangeFonts';
import ChangeFontSize from '../ui/ChangeFontSize';

const MobileSiderbar = () => {
  
  return (
    <Stack
      width={'100%'}
      bgColor={'#001529'}
      display={{ base: 'inherit', md: 'none', lg: 'none' }}
      position={'fixed'}
      bottom={'0'}
      direction={'row'}
      px={10}
      color={'white'}
    >
      <Tabs isLazy w={'100%'} defaultIndex={-1}>
        <TabPanels>
          <TabPanel>
            <Stack justifyContent={'left'}>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                Markers
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <Button
                width={'fit-content'}
                leftIcon={<BiText />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                <FabricTextBox />
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                <Image />
              </Button>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                Gifs
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <Button
                width={'fit-content'}
                leftIcon={<FaRegCircle />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                <FabricCircle />
              </Button>
              <Button
                width={'fit-content'}
                leftIcon={<BiRectangle />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                <FabricRectangle />
              </Button>
              <Button
                width={'fit-content'}
                leftIcon={<BsTriangle />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                <FabricTriangle />
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                Polygon
              </Button>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                Line
              </Button>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                Arrow
              </Button>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                <Pen />
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                Chart
              </Button>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                Code
              </Button>
              <Button
                width={'fit-content'}
                leftIcon={<SiIconify />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                iFrame
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <Button
                width={'fit-content'}
                leftIcon={<GrYoutube />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                Video
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <Button
                width={'fit-content'}
                leftIcon={<CgGhostCharacter />}
                variant={'ghost'}
                _hover={{}}
                _focus={{}}
                _active={{}}
              >
                SVG
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    width={'fit-content'}
                    leftIcon={<VscSymbolColor />}
                    variant={'ghost'}
                    _hover={{}}
                    _focus={{}}
                    _active={{}}
                  >
                    Response style
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />

                  <PopoverBody alignSelf={'center'}>
                    <ColorPicker />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Stack justifyContent={'left'}>
              <ChangeFonts />
              <br />
              <ChangeFontSize />
            </Stack>
          </TabPanel>

        </TabPanels>
        <TabList maxWidth={'100%'} overflowX={'auto'} overflowY={'hidden'}>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <SiIconify color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Stickers
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <BiText color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Text
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <BsCardImage color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Image
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <FaShapes color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Shapes
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <FaDrawPolygon color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Drawing
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <BsCodeSlash color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Element
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <GrYoutube color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Video
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <CgGhostCharacter color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                SVG
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
            width={'fit-content'}
          >
            <VStack justifyContent={'center'}>
              <VscSymbolColor color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Colors
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <ImFont color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Fonts
              </Text>
            </VStack>
          </Tab>
          <Tab
            _focus={{ boxShadow: 'none' }}
            _hover={{ backgroundColor: '#001529' }}
          >
            <VStack justifyContent={'center'}>
              <AiFillCloseCircle color="white" size={18} />
              <Text
                color="white"
                fontWeight={'700'}
                fontSize={'xs'}
                mt={'0 !important'}
              >
                Close
              </Text>
            </VStack>
          </Tab>
        </TabList>
      </Tabs>
    </Stack>
  );
};

export default MobileSiderbar;
