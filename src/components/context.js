import React, { useContext, useEffect, useState} from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [img, setImg] = useState([]);
    const [fav, setFav] = useState([]);
    const [showFav, setShowFav] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const pageUrl = `page=${page}`;
    console.log(page)
    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/?client_id=KXji445Ehw8wuQbtC-E-AXEM1g79gvtbohLoyMkj1mo&&${pageUrl}`)
            .then(response => response.json())
            .then(data => {
            // console.log(data)
            setImg(data);
            setIsLoading(false)
            })
        }, [page])
    
    return(
        <AppContext.Provider
        value={{
            img, 
            isLoading, 
            fav, 
            setFav, 
            showFav, 
            setShowFav,
            setPage,
            page
        }}
      >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}