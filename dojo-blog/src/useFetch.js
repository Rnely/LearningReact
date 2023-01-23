import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //fetching data from json server
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false)
            })
        //dependencies
    }, [url]);
    
    return { data, isPending, error}
}
export default useFetch;