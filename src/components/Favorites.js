import React, { useState } from 'react'
import FavPic from './FavPic'
import AlertMsg from './AlertMsg';
import { useGlobalContext } from './context'
import { Box, Heading } from '@chakra-ui/react'
export const Favorites = () => {
    const {fav, setFav} = useGlobalContext();
    const [ errorMsg, setErrorMsg ] = useState(false)
    return (
        <>
        {fav.length === 0 &&
        (<Heading
        m={250}
        mx='auto'
        textAlign='center'>
            No tenes favoritos
        </Heading>
        )}
        { errorMsg &&  <AlertMsg errorMsg={errorMsg} setErrorMsg={setErrorMsg} />}
        <Box
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
        >
            {fav.length > 0 && (
                fav.map((oneFav) => {
                        return(
                            <FavPic setErrorMsg={setErrorMsg} errorMsg={errorMsg} key={oneFav.id} oneFav={oneFav}  setFav={setFav}  fav={fav}/>
                        )
                    })
            )}
        </Box>
        </>
    )
}

