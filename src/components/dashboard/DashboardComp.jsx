import { Input, InputGroup, InputLeftElement, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import Layout from '../../layout/Layout'
import dashbg from '../../assests/images/dashbg.png'
import { BiSearch } from 'react-icons/bi'
import CreateNewCard from './CreateNewCard'
import CreateTemplate from './CreateTemplate'
import ProjectTabs from './projetcs/ProjectTabs'
import sc1 from '../../assests/images/sc1.png'
import sc2 from '../../assests/images/sc2.png'
import sc3 from '../../assests/images/sc3.png'
import sc4 from '../../assests/images/sc4.png'
import sc5 from '../../assests/images/sc5.png'
import sc6 from '../../assests/images/sc6.png'
import sc7 from '../../assests/images/sc7.png'
import sc8 from '../../assests/images/sc8.png'
import sc9 from '../../assests/images/sc9.png'
import sc10 from '../../assests/images/sc10.png'
import sc11 from '../../assests/images/sc11.png'
import sc12 from '../../assests/images/sc12.png'
import sc13 from '../../assests/images/sc13.png'
import sc14 from '../../assests/images/sc14.png'
import Showcase from './showcase/Showcase'

const DashboardComp = () => {
  const showcase = [
    { photo: sc1 },
    { photo: sc2 },
    { photo: sc3 },
    { photo: sc5 },
    { photo: sc4 },
    { photo: sc10 },
    { photo: sc6 },
    { photo: sc7 },
    { photo: sc11 },
    { photo: sc12 },
    { photo: sc13 },
    { photo: sc14 },
    { photo: sc8 },
    { photo: sc9 },
  ]
  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);
  return (
    <>
      <Layout>
        <Stack minH={'100vh'} bgColor={'#F2F2F3'} m={'0 !important'}>
          {/* Header Image */}
          <Stack mx={'4'} bgImage={dashbg} bgSize={'cover'} bgPos={'center'} h={'40vh'} align={'center'} justify={'center'} borderLeftRadius={'full'} borderRightRadius={'full'} mt={'3'}>
            <InputGroup w={'60%'} bgColor={'rgba(255,255,255,0.5)'} borderRadius={'lg'} size={'lg'} >
              <InputLeftElement pointerEvents={'none'} children={<BiSearch />} />
              <Input placeholder='Search ' _active={{}} _focus={{}} ref={inputReference} />
            </InputGroup>
          </Stack>
          <Stack pt={'4'}>
            <Tabs variant='unstyled' align='center'>
              <TabList>
                <Tab mx={{ base: '1', sm: '4' }} w={{ base: 'fit-content', sm: '56' }} borderRadius={'lg'} background='#e0e0e0' boxShadow={'11px 11px 13px #c1c1c1,-11px -11px 13px #ffffff'} _selected={{ boxShadow: 'inset 5px 5px 10px #9b9b9b, inset -5px -5px 10px #ffffff' }}>Home</Tab>
                <Tab mx={{ base: '1', sm: '4' }} w={{ base: 'fit-content', sm: '56' }} borderRadius={'lg'} background='#e0e0e0' boxShadow={'11px 11px 13px #c1c1c1,-11px -11px 13px #ffffff'} _selected={{ boxShadow: 'inset 5px 5px 10px #9b9b9b, inset -5px -5px 10px #ffffff' }}>Projects</Tab>
                <Tab mx={{ base: '1', sm: '4' }} w={{ base: 'fit-content', sm: '56' }} borderRadius={'lg'} background='#e0e0e0' boxShadow={'11px 11px 13px #c1c1c1,-11px -11px 13px #ffffff'} _selected={{ boxShadow: 'inset 5px 5px 10px #9b9b9b, inset -5px -5px 10px #ffffff' }}>Showcase</Tab>
              </TabList>
              <TabPanels my={'6'}>
                <TabPanel>
                  <Stack>
                    <CreateNewCard />
                    <CreateTemplate />
                  </Stack>
                </TabPanel>

                <TabPanel>
                  <CreateNewCard />
                  <ProjectTabs />
                </TabPanel>

                <TabPanel
                  h={'100vh'} overflow={'auto'} css={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
                >
                  <Showcase showcaseList={showcase} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}

export default DashboardComp