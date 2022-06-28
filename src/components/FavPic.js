import React from 'react'
import { Center, VStack, Image } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import { useGlobalContext } from './context'
const FavPic = ({oneFav}) => {

    const {setFav, fav} = useGlobalContext();
    const deleteFavorite = (id) => {
        const fileteredArray = fav.filter(oneFav => oneFav.id !== id);
        return setFav(fileteredArray);
    }
    return(

        <VStack
        spacing={0}
        mx='auto'
        mt={5}
        mb={5}
        >
            <Image
            src={oneFav.img} 
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
            onClick={() => {deleteFavorite(oneFav.id)}}
            cursor='pointer'
            >
                <FaTrash color='#f3f4f8' fontSize='20px' />
            </Center>
        </VStack>
    )

}

export default FavPic
