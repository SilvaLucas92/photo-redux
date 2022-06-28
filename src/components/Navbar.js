import {
    chakra,
    Flex,
    Icon,
    Stack,
    HStack,
    Heading,

    } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './context';
import { AiOutlineHeart } from "react-icons/ai";
export const Navbar = () => {
    const {fav, setShowFav} = useGlobalContext();
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) {
          setShow(false); 
        } else {
          setShow(true);  
        }
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);
    return (
        <Stack
        as='header'
        w='100%'
        top={show ? 0 : '-100px'}
        left='0'
        right='0'
        bg='#ffffff'
        borderBottomWidth={1}
        position='fixed'
        zIndex='1'
        boxShadow='xl'
        >
            <Flex >
                <HStack
                w={{base: '90%', md: '80%'}}
                mx='auto'
                justify='space-between'
                align='center'
                p={5}>
                    <Heading 
                    fontWeight="bold"
                    color="#2b2c34"
                    onClick={() => setShowFav(false)}
                    cursor='pointer'
                    >
                        Photo Gallery
                    </Heading>
                    <Flex
                    as='nav'
                    justify='center'
                    align='center'
                    >
                        <chakra.span pos="relative" display="inline-block">
                            <Icon
                            boxSize={6}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => setShowFav(true)} cursor='pointer'
                            >
                                <AiOutlineHeart size={{base:'md', md: 'xl'}}/>
                            </Icon>
                            <chakra.span
                            pos="absolute"
                            top="-1px"
                            right="-1px"
                            px={2}
                            py={1}
                            fontSize="xs"
                            fontWeight="bold"
                            lineHeight="none"
                            color="red.100"
                            transform="translate(50%,-50%)"
                            bg="red.600"
                            rounded="full"
                            display={fav.length === 0? 'none' : 'block' }
                            >
                            {fav.length}
                            </chakra.span>
                        </chakra.span>
                    </Flex>  
                </HStack>
            </Flex>
        </Stack>

    )
}