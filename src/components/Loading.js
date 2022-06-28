import { Spinner, Center } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Center>
        <Spinner 
        size='xl'
        m={250}
        mx='auto'
        textAlign='center'>

        </Spinner>
    </Center>
  )
}

export default Loading