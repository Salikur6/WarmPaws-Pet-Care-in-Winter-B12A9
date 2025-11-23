import { useEffect, useState } from "react";


const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
                setError(data.error)
            })
    }, [url])

    return { data, loading, error }


}

export default useFetch;