import { useEffect, useRef, useState } from "react";
import api from "../helpers";

type UseFetchResponse<T> = {
    responseData: T | null;
    loading: boolean;
    error: string | null;
};

function useFetch<T>(url: string): UseFetchResponse<T> {
    const [responseData, setResponseData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        const fetchData = async () => {
            setLoading(true);
            setResponseData(null);
            setError(null);

            try {
                const apiInstance = await api();
                const response = await apiInstance.get(url);

                if (isMounted.current) {
                    setLoading(false);
                    if (response.data) {
                        setResponseData(response.data);
                    }
                }
            } catch (err) {
                if (isMounted.current) {
                    setLoading(false);
                    setError("An error occurred. Awkward..");
                }
            }
        };

        fetchData();

        return () => {
            isMounted.current = false;
        };
    }, [url]);

    return { responseData, loading, error };
}

export default useFetch;
