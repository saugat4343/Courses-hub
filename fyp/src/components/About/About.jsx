import { Avatar, Container, Heading, Text, Stack, VStack, Button, Box, HStack } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from "../../assets/videos/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition.js';

const Founder = () => (
    <Stack
        direction={["column", "row"]}
        spacing={["4", "16"]}
        padding={"8"}
    >

        <VStack>
            <Avatar src='https://cdn.pixabay.com/photo/2022/12/03/21/19/man-7633407_1280.png' boxSize={['40', "48"]} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={"center"} alignItems={['center', 'flex-start']}>
            <Heading children="Saugat Rai" size={["md", "xl"]} />
            <Text
                textAlign={["center", "left"]}
                children={`Hi, I am a full-stack developer and a Student. Our mission is to 
                provide a platform to provide quality content at a reasonable price.`} />
        </VStack>

    </Stack>
);

const VideoPlayer = () => (
    <Box>
        <video
            autoPlay
            controls
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
        >
        </video>
    </Box>
);

const TandC = ({ termsAndCondition }) => (
    <Box my={'7'}>
        <Heading
            children="Terms & Condition"
            size={"md"}
            textAlign={["center", "left"]}
        />

        <Box h={"sm"} p={"4"} overflowY={"scroll"}>
            <Text
                textAlign={["center", "left"]}
                letterSpacing={"widest"}
                fontFamily={"heading"}
            >
                {termsAndCondition}
            </Text>
            <Heading
                children="Refund only applicable for cancellation within 7 days."
                my={"4"}
                size={"xs"}
            />
        </Box>
    </Box>
);

const About = () => {
    return (
        <Container maxW={"container.lg"} padding={"5"} boxShadow={'lg'} >

            <Heading
                children="About Us"
                textAlign={["center", "left"]}
            />

            <Founder />

            <Stack
                m={"8"}
                direction={["column", "row"]}
                alignItems={"center"}
            >

                <Text
                    fontFamily={"cursive"}
                    m={"8"}
                    textAlign={["center", "left"]}
                >
                    This is a video streaming platform with some premium courses available only for premium users.
                </Text>

                <Link to={"/subscribe"}>
                    <Button variant={"ghost"} colorScheme='blue' >
                        Checkout Our Plan
                    </Button>
                </Link>

            </Stack>

            <VideoPlayer />

            <TandC termsAndCondition={termsAndCondition} />

            <HStack my={"4"} p={"4"} >
                <RiSecurePaymentFill />
                <Heading
                    children={"Payment is secured by RazorPay."}
                    size={"xs"}
                    fontFamily={"sans-serif"}
                    textTransform={"upppercase"}
                />
            </HStack>

        </Container>
    )
}

export default About;