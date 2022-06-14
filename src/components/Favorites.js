import React from 'react'
import FavPic from './FavPic'
import { useGlobalContext } from './context'
import { Flex, Heading, Text } from '@chakra-ui/react'
export const Favorites = () => {
    const {fav, setFav} = useGlobalContext()
    return (
        // <>
        // <section className="photos" >
        //     <div className='div-arrow'>
        //         <h2>Favorites</h2>  
        //     </div>
        //     <div className='div-art2'>          
        //         {fav.length === 0 && (<div className='empty-div'> <h2>No tenes favoritos</h2></div>)} 
        //         {fav.length > 0
        //                 && (<>
        //                     {fav.map((oneFav) => {
        //                         return(
        //                             <FavPic key={oneFav.id} oneFav={oneFav}  setFav={setFav}  fav={fav}/>
        //                         )
        //                     })}
        //                 </>)}  
        //     </div>
        //     <div className='div-btn'>
        //         <button onClick={() => setFav([])}>Eliminar todos</button> 
        //     </div>
        // </section>
        // </>
        <Flex
        direction={{md:'row'}}
        w='90%'
        mx='auto'
        wrap='wrap'
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
        </Flex>
    )
}

