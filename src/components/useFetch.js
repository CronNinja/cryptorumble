import {useEffect, useState} from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal,
            headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => {
            if(!res.ok){
                console.log(res)
                throw Error('Could not fetch data for crypto resource');
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else {
                setError(err.message);
                setIsLoading(false);
            }
        });
        return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error }
}

export default UseFetch