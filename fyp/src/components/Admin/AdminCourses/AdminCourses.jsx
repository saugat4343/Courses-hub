import {
  Grid,
  Box,
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  HStack,
  Image,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const courses = [
    {
      _id: 'sdafasfasd1',
      title: 'Django Course',
      category: 'Web Development',
      createdBy: 'Saugat Rai',
      poster: {
        url: 'https://cdn.pixabay.com/photo/2024/03/09/02/26/bird-8621836_1280.jpg',
      },
      views: 1213,
      numOfVideos: 12,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = userId => {
    onOpen();
  };

  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };

  const addLectureHandler = ({ e, courseId, title, description, video }) => {
    e.preventDefault();
  };

  return (
    <Grid
      css={{ cursor: `url(${cursor}), default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          children="All Courses"
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Courses in the Database.</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'dsafsgas'}
          courseTitle={'Django Course'}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            View Lectures
          </Button>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
