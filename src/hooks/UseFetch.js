import { useState, useEffect } from 'react';
const UseFetch = (url) => {
    
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
        const Abortcont = new AbortController();

        async function fetchData() {
            try {
                console.log("Fetch request sent");
                let res = await fetch(url, {signal: Abortcont.signal});
    
                if (!res.ok) {
                    throw Error('Could not reach server');
                }
    
                let photos = await res.json();
                console.log(photos);
                setdata(photos);
                setisPending(false);
    
            } catch (err) {
                console.log(err);
                seterror(err);
                setisPending(false);
            }
        }
        fetchData();

        return () => Abortcont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default UseFetch;