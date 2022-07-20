import { useEffect, useState } from 'react';

const useTimeout = (s = 4) => {
    const [timeExpired, setTimeExpired] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => {
            setTimeExpired(true);
        }, s * 1000);

        return () => clearTimeout(t);
    }, [s]);

    const reset = () => setTimeExpired(false);

    return [timeExpired, reset];
};

export default useTimeout;
