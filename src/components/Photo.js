import { Center, VStack, Image, Skeleton } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Photo = ({theImg, setAlert}) => {
    const {fav, setFav} = useGlobalContext()
    const [isLoaded, setIsLoaded] = useState(true)
    const addFav = (id) => {
        setFav([...fav, {id: theImg.id, img: theImg.urls.full}])
        setAlert(true)
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(false)
        }, 3000)
    }, [])

        if(isLoaded) {
            return (
                <VStack
                spacing={0}
                m='20px'
                align='center'
                mx='auto'
                >
                <Skeleton
                height='40px'
                color='white'
                fadeDuration={1}
                w={[250, 230 , 250, 210]}
                h={330}
                borderRadius={15}/>
                </VStack>
            )
        }
        if(!isLoaded) {
            return(
            <VStack
            spacing={0}
            m='20px'
            align='center'
            mx='auto'
            >
                <Image
                src={theImg.urls.full} 
                w={[250, 230 , 250, 210]}
                h={300}
                borderTopRadius={15}
                />
                <Center
                borderBottomRadius={15}
                w={[250, 230 , 250, 210]}
                h={30}
                p={5}
                variant='ghost'
                isRounded='true'
                bg='#5b5d6b'
                onClick={() => {addFav(theImg.id)}}
                cursor='pointer'
                >
                    <FaHeart color='#f3f4f8' fontSize='20px' />
                </Center>
            </VStack>

            )
        }
    }

export default Photo


