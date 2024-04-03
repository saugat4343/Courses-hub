import React from 'react';
import { Heading, Image, Text, Button, Stack, VStack, Box, HStack } from "@chakra-ui/react";
import "./home.css"
import { Link } from 'react-router-dom';
import vg from "../../assets/images/bg2.png"
import { CgGoogle, CgYoutube } from "react-icons/cg"
import { DiAws } from "react-icons/di"
import { SiCoursera, SiUdacity } from "react-icons/si"
import introVideo from "../../assets/videos/intro.mp4"

const Home = () => {
  return (
    <section className='home'>

      <div className='container'>
        {/* Stack has display:"Flex" */}
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems='center'
          spacing={["18", "33"]}
        >
          {/* Vertical Stack. direction: "column" */}
          <VStack width={"full"} alignItems={["center", "flex-end"]} spacing={"3"}>

            <Heading children="LEARN EVERYTHING ONLINE" size={'2xl'} textAlign={["center", "right"]} />
            <Text children="Find Valuable Content at Reasonable Price." fontSize={"2xl"} fontFamily={"cursive"} textAlign={["center", "right"]} />
            <Text textAlign={["center", "right"]}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </Text>
            <Link to="/courses">
              <Button size={"lg"} colorScheme='blue'>
                Explore Now
              </Button>
            </Link>

          </VStack>

          {/* width={"38%"} */}
          <Image
            className='vector-graphics'
            boxSize={"md"}
            src={vg}
            marginBottom="14"
            objectFit="contain"
          />

        </Stack>
      </div>

      <Box padding={"8"} bg={"blackAlpha.800"}>
        <Heading
          children="OUR BRANDS"
          textAlign={"center"}
          fontFamily={"body"}
          color={"blue.400"}
        />

        <HStack
          className='brandsBanner'
          justifyContent={"space-evenly"}
          marginTop={'5'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdacity />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">

        <video
          // autoPlay
          controls
          controlsList='nodownload nofullscreen noremoteplayback'
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        >
        </video>

      </div>

    </section>
  )
}

export default Home