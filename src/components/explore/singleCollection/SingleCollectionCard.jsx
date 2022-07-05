import {
  Avatar,
  Button,
  Heading,
  Stack,
  Tag,
  Text,
  chakra,
} from '@chakra-ui/react';
import React from 'react';
import { FaFire } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import Trending1 from '../../../assests/images/trending1.jpg';
import { useNavigate } from 'react-router-dom';

const perValue = 0.09;
const SingleCollectionCard = () => {
  const nav = useNavigate();
  return (
    <>
      <Stack
        className="container"
        borderRadius={'lg'}
        h={'30rem'}
        align={'center'}
        p={'2'}
        onClick={() => nav('/explore/collection/user1/details')}
      >
        <Stack
          className="card"
          bgImage={Trending1}
          bgRepeat={'no-repeat'}
          bgPosition={'center'}
          bgSize={'cover'}
          h={'70%'}
          w={'90%'}
          borderRadius={'lg'}
          align={'end'}
          pr={'2'}
          pt={'1'}
        >
          <Button
            borderRadius={'full'}
            color={'white'}
            bg={'rgba(131, 149, 167,0.3)'}
            _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }}
            w={'fit-content'}
          >
            <IoMdHeartEmpty size={'1em'} />
          </Button>
        </Stack>
        <Stack h={'30%'} margin={'0 !Important'} py={'3'} w={'90%'}>
          {/* Title  and Price*/}
          <Stack direction={'row'} justify={'space-between'} align={'baseline'}>
            <Heading fontSize={'md'} color={'#353840'}>
              Dog Lover/Loser
            </Heading>
            <Heading
              fontSize={'sm'}
              color={'#647CBE'}
              textTransform={'uppercase'}
            >
              {0.003} WEth
            </Heading>
          </Stack>
          <Stack w={'100%'} borderBottom={'1px solid'} pb={'2'}>
            <Tag
              w={'fit-content'}
              cursor="pointer"
              bgColor={'transparent'}
              p={'0 !Important'}
              pt={'2'}
            >
              <Avatar
                name="user"
                src={Trending1}
                size={'xs'}
                border={'transparent'}
              />
              <Text pl={'2'}>@user1</Text>
            </Tag>
          </Stack>
          <Stack
            direction={'row'}
            color={'#647CBE'}
            align={'baseline'}
            justify={'space-between'}
          >
            <Text fontSize={'xs'}>
              Highest Bid:{' '}
              <chakra.span fontWeight={'bold'}>{perValue} WETH</chakra.span>
            </Text>
            <Button
              size={'sm'}
              variant={'ghost'}
              _hover={{ bgColor: 'inherit' }}
              _focus={{}}
              _active={{}}
              rightIcon={<FaFire />}
            >
              New Bid
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SingleCollectionCard;
