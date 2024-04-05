import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import introVideo from "../../assets/videos/intro.mp4"

const CoursePage = () => {

    const [lectureNumber, setLectureNumber] = useState(0);

    const lectures = [
        {
            _id: "sadasdsadas1",
            title: "samples",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            video: {
                url: "dsadsad"
            }
        },
        {
            _id: "sadasdsadas2",
            title: "samples",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            video: {
                url: "dsadsad"
            }
        },
        {
            _id: "sadasdsadas3",
            title: "samples",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            video: {
                url: "dsadsad"
            }
        },
    ];

    return (
        <Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]}>
            <Box>
                <video
                    width={"100%"}
                    controls
                    controlsList='nodownload noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                    src={introVideo}
                >
                </video>

                <Heading children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} m={"4"} />

                <Heading children={"Description"} m={"4"} />

                <Text children={lectures[lectureNumber].description} m={"4"}>
                </Text>
            </Box>

            <VStack>
                {
                    lectures.map((element, index) => (
                        <button
                            onClick={() => setLectureNumber(index)}
                            key={element._id}
                            style={{
                                width:"100%",
                                padding:"1rem",
                                textAlign:"center",
                                margin:0,
                                borderBottom:"1px solid rgba(0,0,0,0.2)"
                            }}
                        >
                            <Text>
                                #{index+1} {element.title}
                            </Text>
                        </button>
                    ))
                }
            </VStack>
        </Grid>
    )
}

export default CoursePage;