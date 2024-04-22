import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { teachRequest } from '../../redux/actions/other';
import toast from 'react-hot-toast';
import {
  clearOtherError,
  clearOtherMessage,
} from '../../redux/reducers/otherReducer';

const Teach = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [about, setAbout] = useState('');

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.other);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(teachRequest(name, email, occupation, about));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearOtherError(error));
    }
    if (message) {
      toast.success(message);
      dispatch(clearOtherMessage(message));
    }
  }, [dispatch, message, error]);

  return (
    <Container h={'110vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Become an Instructor" />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Full Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Full Name"
              type="text"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="occupation" children="Occupation" />
            <Input
              required
              id="occupation"
              value={occupation}
              onChange={e => setOccupation(e.target.value)}
              placeholder="Occupation"
              type="text"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="about" children="About You" />
            <Textarea
              required
              id="about"
              value={about}
              onChange={e => setAbout(e.target.value)}
              placeholder="Describe Yourself..."
              focusBorderColor="blue.500"
            />
          </Box>

          <Button isLoading={loading} my={'4'} colorScheme="blue" type="submit">
            Send Mail
          </Button>

          <Box my={'4'}>
            Send us a Feedback!!!{' '}
            <Link to="/contact">
              <Button colorScheme="blue" variant={'link'}>
                Click
              </Button>
            </Link>{' '}
            here.
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Teach;
