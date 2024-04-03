import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h="90vh" p={"16"}>

      <Heading
        children="Thank You!"
        my={"8"}
        textAlign={"center"}
      />

      <VStack
        boxShadow={"lg"}
        pb={"16"}
        alignItems={"center"}
        borderRadius={"lg"}
      >

        <Box
          w={"full"}
          bg={"blue.400"}
          p={"4"}
          css={{ borderRadius: "8px 8px 0 0" }}
        >
          <Text
            children="Payment Successful."
            color={"black"}
          />
        </Box>

        <Box p={"4"}>

          <VStack
            textAlign={"center"}
            px={"8"}
            mt={"4"}
            spacing={"8"}
          >

            <Text
              children="Congratulations. Your Payment is Successful!!!"
            />

            <Heading size={"4xl"}>
              <RiCheckboxCircleFill />
            </Heading>

          </VStack>

        </Box>

        <Link to="/profile">
          <Button variant={"ghost"}>Go to Profile</Button>
        </Link>

        <Heading size={"xs"}>
          Reference: dsadadasdasdad,sda
        </Heading>

      </VStack>

    </Container>
  )
}

export default PaymentSuccess