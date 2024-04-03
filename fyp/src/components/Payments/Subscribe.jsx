import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
    return (
        <Container h={"90vh"} p={"16"}>

            <Heading
                children="Checkout"
                my={"8"}
                textAlign={'center'}
            />

            <VStack
                boxShadow={'lg'}
                alignItems={"stretch"}
                borderRadius={"lg"}
                spacing={"0"}
            >
                <Box bg={"blue.400"} p={"4"} css={{ borderRadius: '8px 8px 0 0' }}>
                    <Text
                        children={`Subscribe to Premium - रु॰999.00`}
                        color={"black"}
                    />
                </Box>

                <Box p="4">
                    <VStack textAlign={"center"} px={"8"}mt={"5"} spacing={"8"}>
                        <Text
                            children={`Subscribe to Premium Pack and Get Access to all content.`}
                        />

                        <Heading size={"md"} children={"रु॰999.00 Only"} />
                    </VStack>

                    <Button my={"8"} w={"full"} colorScheme={"blue"}>
                        Buy Now
                    </Button>
                </Box>

                <Box 
                    bg={"blackAlpha.600"}
                    p={"4"}
                    css={{ borderRadius: '0 0 8px 8px' }}
                >
                    <Heading 
                        size={"sm"} 
                        color={"white"}
                        textTransform={"uppercase"}
                        children={"100% Refund at cancellation."} 
                    />

                    <Text
                        fontSize={"xs"}
                        color={"white"}
                        children={"*Terms & Conditions Apply"}
                    />

                </Box>

            </VStack>
        </Container>
    )
}

export default Subscribe;