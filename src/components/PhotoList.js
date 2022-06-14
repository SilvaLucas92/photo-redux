import React from 'react'
import Photo from './Photo';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
import { useGlobalContext } from './context';
import { Loading } from './Loading'
import { Flex, HStack } from '@chakra-ui/react';
export const PhotoList = () => {
    const {img, setPage, page} = useGlobalContext();
    return (
    // <>
    //     <section className='photos'>
    //         <div className='div-arrow'>
    //             <BsFillArrowLeftSquareFill onClick={() => {setPage(page === 1? 1 : page - 1)}} color='#101223' fontSize='35px' cursor='pointer'/>
    //             <h2>Home</h2>
    //             <BsFillArrowRightSquareFill onClick={() => {setPage(page + 1)}} color='#101223' fontSize='35px' cursor='pointer'/>       
    //         </div>
    //         <div className="div-art2"> 
    //             {!img && <Loading />}
    //                     {img && (
    //                         img.map(theImg => {
    //                             return(
    //                                 <Photo key={theImg.id}  theImg={theImg} />
    //                             )
    //                         })
    //                     )} 
    //         </div>                            
    //     </section>
    //     </> 
        <>
        <HStack
            w='80%'
            mx='auto'
            p={10}
            justifyContent='space-between'
            alignItems='center'>
            <BsFillArrowLeftSquareFill onClick={() => {setPage(page === 1? 1 : page - 1)}} color='#f3f4f8' fontSize='35px' cursor='pointer'/>
            <BsFillArrowRightSquareFill onClick={() => {setPage(page + 1)}} color='#f3f4f8' fontSize='35px' cursor='pointer'/> 
        </HStack>
        <Flex
        direction={{md:'row'}}
        w='90%'
        mx='auto'
        wrap='wrap'
        >
            {!img && <Loading />}
            {img && (
                    img.map(theImg => {
                        return(
                            <Photo key={theImg.id}  theImg={theImg} />
                                )
                            })
                        )} 
        </Flex>
        </>
    )
}
