
import yelp from "../api/yelp"
import React, { useState, useEffect } from 'react'
 
const useResults = () => {
    const[ results, setResults ] = useState([])
    const[ errorMessage, setErrorMessage ] = useState('')

    const searchApi = async searchTerm => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        }catch (err) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [ searchApi, results, errorMessage ]
}

export default useResults