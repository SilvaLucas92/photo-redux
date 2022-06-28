import React from 'react'
import FavPic from './FavPic'
import { useGlobalContext } from './context'
import { Stack, Heading, Text } from '@chakra-ui/react'
export const Favorites = () => {
    const {fav, setFav} = useGlobalContext()
    return (
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
            sm: 5,
            }}
            gridRowGap={{
            sm: 5,
            }}
            mx='auto'
            display='flex'
        >
            {fav.length === 0 &&
            (<Heading
            m={250}
            mx='auto'
            textAlign='center'>
                No tenes favoritos
            </Heading>)}
            {fav.length > 0 && (
                fav.map((oneFav) => {
                        return(
                            <FavPic key={oneFav.id} oneFav={oneFav}  setFav={setFav}  fav={fav}/>
                        )
                    })
            )}
        </Stack>
    )
}

