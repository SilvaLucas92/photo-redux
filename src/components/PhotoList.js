import React, { useState } from 'react'
import Photo from './Photo';
import AlertMsg from './AlertMsg';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
import { useGlobalContext } from './context';
import Loading  from './Loading'
import { HStack, IconButton, Stack } from '@chakra-ui/react';
export const PhotoList = () => {
    const {img, setPage, page} = useGlobalContext();
    const [ alert, setAlert ] = useState(false);
    return (
        <>
        <HStack
            w='80%'
            mx='auto'
            p={10}
            justifyContent='space-between'
            alignItems='center'>
            {alert && <AlertMsg setAlert={setAlert} alert={alert} />}
            <IconButton icon={<BsFillArrowLeftSquareFill/>} onClick={() => {setPage(page === 1? 1 : page - 1)}} variant='solid' color='5b5d6b' fontSize='35px' cursor='pointer'/>
            <IconButton icon={<BsFillArrowRightSquareFill/>} onClick={() => {setPage(page + 1)}} variant='solid' color='5b5d6b' fontSize='35px' cursor='pointer'/>
        </HStack>
        {alert && <AlertMsg setAlert={setAlert} alert={alert} />}
        <Stack
            spacing={{
            base: 5,
            }}
            display={{
            sm: "grid",
            }}
            gridTemplateColumns={{
            sm:"repeat(2,1fr)",
            md: "repeat(3,1fr)",
            xl: "repeat(5,1fr)",
            }}
            gridColumnGap={{
            sm: 2,
            }}
            gridRowGap={{
            sm: 2,
            }}
            mx='auto'
            mb='20px'
        >
            {!img && <Loading />}
            {img && (
                    img.map(theImg => {
                        return(
                            <Photo setAlert={setAlert} key={theImg.id}  theImg={theImg} />
                                )
                            })
                        )} 
        </Stack>
        </>
    )
}
