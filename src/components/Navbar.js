import {
    chakra,
    Box,
    useColorModeValue,
    Flex,
    IconButton,
    useDisclosure
    } from "@chakra-ui/react";
import React from 'react'
import { useGlobalContext } from './context';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export const Navbar = () => {
    const {fav, setShowFav} = useGlobalContext();
    const mobileNav = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
    return (
    <chakra.nav bg={bg} shadow="base">
        <Box mx="auto" px={6} py={3} maxW="full">
            <Box
            display={{ md: "flex" }}
            alignItems={{ md: "center" }}
            justifyContent={{ md: "space-between" }}
            >
            <Flex alignItems="center" justifyContent="space-between">
                <Box fontSize="xl" fontWeight="semibold" color="gray.700">
                <chakra.a
                    fontSize={["xl", "2xl"]}
                    fontWeight="bold"
                    color={useColorModeValue("gray.800", "white")}
                    cursor='pointer'
                >
                    Photo Gallery
                </chakra.a>
                </Box>

                <Flex display={{ md: "none" }}>
                <IconButton
                    aria-label="toggle menu"
                    icon={!mobileNav.isOpen? <AiOutlineMenu /> : <AiOutlineClose />}
                    variant="ghost"
                    onClick={!mobileNav.isOpen? mobileNav.onOpen : mobileNav.onClose}
                />
                </Flex>
            </Flex>

            <Box
            display={[mobileNav.isOpen? "block" : 'none', , "flex"]}
            alignItems={{base:'center',  md: "center" }}
            direction={['column', 'row']}
            justifyContent='center'
            textAlign='center'
            >
                <chakra.a
                display="block"
                mx={4}
                m={[mobileNav.isOpen? "25px" : '10px']}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                cursor='pointer'
                onClick={() => setShowFav(true)}
                >
                Fav {fav.length > 0 ? `(${fav.length})` : null}
                </chakra.a>
                <chakra.a
                display="block"
                mx={4}
                m={[mobileNav.isOpen? "25px" : '10px']}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                cursor='pointer'
                onClick={() => setShowFav(false)}
                >
                    Home
                </chakra.a>
            </Box>
            </Box>
        </Box>
    </chakra.nav> 
    )
}
