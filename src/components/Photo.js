import { Center, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Photo = ({theImg}) => {
    const {fav, setFav} = useGlobalContext()
    const addFav = (id) => {
        setFav([...fav, {id: theImg.id, img: theImg.urls.full}])
    }
    console.log(fav)
    return (
            // <article className='photo'>
            //     <img src={theImg.urls.full} alt="ok" />
            //     <button onClick={() => {addFav(theImg.id)}} >  <FaHeart color='#f3f4f8' fontSize='20px' /> </button>
            // </article>  
            <VStack
            spacing={0}
            mx='auto'
            mt={5}
            mb={5}
            >
                <Image
                src={theImg.urls.full} 
                w={[270, 270 , 250, 250]}
                h={300}
                borderTopRadius={15}
                />
                <Center
                borderBottomRadius={15}
                w={[270, 270 , 250, 250]}
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

export default Photo


