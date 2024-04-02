import { Container, Button, Text, HStack, Heading, Input, Stack, VStack, Image, Link } from '@chakra-ui/react';
import React, { useState } from 'react';

const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount }) => {
  return (
    <VStack className='course' alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit="contain" />
      <Heading
        textAlign={["center", "left"]}
        maxW={"200px"}
        size={'sm'}
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
      />
      <Text children={description} noOfLines={2} />

      <HStack>
        <Text
          children={"Creator"}
          textTranform="uppercase"
          fontWeight={"bold"}
        />
        <Text
          children={creator}
          textTranform="uppercase"
          fontFamily={"body"}
        />
      </HStack>

      <Heading
        textAlign={"center"}
        size={"xs"}
        children={`Lectures - ${lectureCount}`}
        textTransform={"uppercase"}
      />

      <Heading
        size={"xs"}
        children={`Views - ${views}`}
        textTransform={"uppercase"}
      />

      <Stack 
        direction={["column", "row"]}
        alignItems={"center"}
      >

        <Link to={`/course/${id}`}>
          <Button colorScheme='blue'> Watch Now </Button>
        </Link>

        <Button
          variant={"ghost"}
          colorScheme='blue'
          onClick={() => addToPlaylistHandler()}
        >
            Add To Playlist
        </Button>

      </Stack>

    </VStack>
  )
}

const Courses = () => {

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log("Added to Playlist");
  }

  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "Data Structure & Algorithms",
    "App Development",
    "Data Science",
    "Game Development"
  ];

  return (
    <Container minH={"95vh"} maxW={"container.lg"} paddingY={"8"} >

      <Heading children="All Courses" m={"8"} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder='Search a course...'
        type='text'
      />

      <HStack
        overflowX={"auto"}
        paddingY={"8"}
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
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >

        <Course
          title={"Sample1"}
          description={"Sample1 Description"}
          views={23}
          imageSrc={"https://cdn.pixabay.com/photo/2024/03/09/02/26/bird-8621836_1280.jpg"}
          id={"Sample1"}
          creator={"Sample Boy"}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />

      </Stack>

    </Container>
  );
};

export default Courses;