import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Image, Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerOverlay, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import logo from "../../../assets/images/logo2.png"
import { Link } from 'react-router-dom';

// Function is not a COMPONENT.
const LinkButton = ({ url = "/", title = "Home", onClose }) => (
    <Link onClick={onClose} to={url}>
        <Button variant={"ghost"}> {title} </Button>
    </Link>
);

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const isAuthenticated = false;

    const user = {
        role: "admin",
    };

    const logoutHandler = () => {
        console.log("Logout");
        onClose();
    };

    return (
        <>
            <ColorModeSwitcher />

            <Button
                onClick={onOpen}
                colorScheme='blue'
                width={"12"}
                height={"12"}
                rounded={"full"}
                position={"fixed"}
                top={"6"}
                left={"6"}
            >
                <RiMenu5Fill />
            </Button>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(1px)'} />
                <DrawerContent>
                    {/* DRAWER HEADER */}
                    {/* <DrawerHeader>COURSES HUB</DrawerHeader> */}
                    <DrawerHeader borderBottomWidth={"1px"}>
                        <Image src={logo}></Image>
                    </DrawerHeader>

                    {/* DRAWER BODY */}
                    <DrawerBody>
                        <VStack spacing={"4"} alignItems={"flex-start"}>
                            <LinkButton onClose={onClose} url="/" title="Home" />
                            <LinkButton onClose={onClose} url="/courses" title="Courses" />
                            <LinkButton onClose={onClose} url="/teach" title="Teach" />
                            <LinkButton onClose={onClose} url="/about" title="About Us" />

                            <HStack
                                justifyContent={"space-evenly"}
                                position={"absolute"}
                                bottom={"2rem"}
                                width={"80%"}
                            >

                                {isAuthenticated ? (
                                    <>
                                        <VStack>
                                            <HStack>
                                                <Link onClick={onClose} to={"/profile"}>
                                                    <Button variant={"ghost"} colorScheme='blue'>
                                                        Profile
                                                    </Button>
                                                </Link>

                                                <Button variant={"ghost"} onClick={logoutHandler}>
                                                    <RiLogoutBoxLine style={{ margin: "4px" }} />
                                                    Logout
                                                </Button>

                                            </HStack>

                                            {
                                                user && user.role === "admin" && <Link onClick={onClose} to={"/admin/dashboard"}>
                                                    <Button colorScheme='purple' variant={"ghost"}>
                                                        <RiDashboardFill style={{ margin: "4px" }} />
                                                        Dashboard
                                                    </Button>
                                                </Link>
                                            }

                                        </VStack>
                                    </>
                                ) : (
                                    <>
                                        <Link onClick={onClose} to={"/login"}>
                                            <Button colorScheme='blue'>Login</Button>
                                        </Link>

                                        <p>OR</p>

                                        <Link onClick={onClose} to={"/register"}>
                                            <Button colorScheme='blue'>Sign Up</Button>
                                        </Link>
                                    </>
                                )}
                            </HStack>
                        </VStack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>

    )
}

export default Header;