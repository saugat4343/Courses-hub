import {
  Box,
  Text,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/user';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#3182CE',
  backgroundColor: 'white',
  borderRadius: '10px',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('name', name);
    myForm.append('email', email);
    myForm.append('password', password);
    myForm.append('file', image);

    dispatch(register(myForm));
  };

  return (
    <Container h={'125vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <VStack spacing={'3'}>
          <Heading children={'Register Now!'}></Heading>
          <Text
            children={'Sign-Up and Start Learning'}
            fontFamily={'cursive'}
            textAlign={'center'}
          />
        </VStack>

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box display={'flex'} justifyContent={'center'} my={'4'}>
            <Avatar src={imagePrev} size={'2xl'} border={'1px solid'} />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your Password"
              type="password"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              required
              accept="image/*"
              id="chooseAvatar"
              type="file"
              focusBorderColor="blue.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my={'4'} colorScheme="blue" type="submit">
            Sign-Up
          </Button>

          <Box my={'4'}>
            Already have an account?{' '}
            <Link to="/login">
              <Button colorScheme="blue" variant={'link'}>
                Login
              </Button>
            </Link>{' '}
            here.
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
