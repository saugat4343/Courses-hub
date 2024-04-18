import {
  Container,
  Button,
  Text,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  clearCourseError,
  clearCourseMessage,
} from '../../redux/reducers/courseReducer';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit="contain" />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text children={description} noOfLines={2} />

      <HStack>
        <Text
          children={'Creator'}
          textTranform="uppercase"
          fontWeight={'bold'}
        />
        <Text children={creator} textTranform="uppercase" fontFamily={'body'} />
      </HStack>

      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />

      <Heading
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="blue"> Watch Now </Button>
        </Link>

        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme="blue"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addToPlaylistHandler = async courseId => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure & Algorithms',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const { loading, courses, error, message } = useSelector(
    state => state.courses
  );

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch(clearCourseError(error));
    }
    if (message) {
      toast.success(message);
      dispatch(clearCourseMessage(message));
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
      />

      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {/* <Course
          title={'Sample1'}
          description={'Sample1 Description'}
          views={23}
          imageSrc={
            'https://cdn.pixabay.com/photo/2024/03/09/02/26/bird-8621836_1280.jpg'
          }
          id={'Sample1'}
          creator={'Sample Boy'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        /> */}
        {courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt={'4'} children={'Courses Not Found'} />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
