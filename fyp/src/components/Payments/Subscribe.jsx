import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '../../redux/store';
import { buySubscription } from '../../redux/actions/user';
import toast from 'react-hot-toast';
import { clearSubscriptionError } from '../../redux/reducers/subscriptionReducer';
import logo from '../../assets/images/logo1.png';
import { clearCourseError } from '../../redux/reducers/courseReducer';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();

  const [key, setKey] = useState('');

  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );

  const { error: courseError } = useSelector(state => state.courses);

  const subscribeHandler = async () => {
    const {
      data: { key },
    } = await axios.get(`${server}/razorpaykey`);

    setKey(key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearSubscriptionError());
    }
    if (courseError) {
      toast.error(courseError);
      dispatch(clearCourseError(courseError));
    }
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'Courses Hub',
          description: 'Get access to all premium contents.',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'Courses Hub',
          },
          theme: {
            color: '#4299E1',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    user.name,
    user.email,
    key,
    subscriptionId,
    courseError,
  ]);

  return (
    <Container h={'90vh'} p={'16'}>
      <Heading children="Checkout" my={'8'} textAlign={'center'} />

      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'blue.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text children={`Subscribe to Premium - रु॰999.00`} color={'black'} />
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px={'8'} mt={'5'} spacing={'8'}>
            <Text
              children={`Subscribe to Premium Pack and Get Access to all content.`}
            />

            <Heading size={'md'} children={'रु॰300.00 Only'} />
          </VStack>

          <Button
            my={'8'}
            w={'full'}
            colorScheme={'blue'}
            onClick={subscribeHandler}
            isLoading={loading}
          >
            Buy Now
          </Button>
        </Box>

        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading
            size={'sm'}
            color={'white'}
            textTransform={'uppercase'}
            children={'100% Refund at cancellation.'}
          />

          <Text
            fontSize={'xs'}
            color={'white'}
            children={'*Terms & Conditions Apply'}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
