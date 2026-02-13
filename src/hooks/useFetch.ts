import { useState, useEffect } from "react";

interface FetchLog {
    url: string;
    method: string;
    payload: any | null;
    status: number | "ERROR";
    timestamp: string;
}

interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

export default function useFetch<T = any>(
    url: string,
    options: RequestInit = {}
): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const result: T = await response.json();
                setData(result);

                logToLocalStorage({
                    url,
                    method: options.method || "GET",
                    payload: options.body ? JSON.parse(options.body as string) : null,
                    status: response.status,
                    timestamp: new Date().toISOString(),
                });
            } catch (err: any) {
                setError(err);

                logToLocalStorage({
                    url,
                    method: options.method || "GET",
                    payload: options.body ? JSON.parse(options.body as string) : null,
                    status: "ERROR",
                    timestamp: new Date().toISOString(),
                });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
}

/* LOGGER FUNCTION */
function logToLocalStorage(log: FetchLog) {
    const existingLogs: FetchLog[] =
        JSON.parse(localStorage.getItem("apiLogs") || "[]");

    existingLogs.push(log);

    localStorage.setItem("apiLogs", JSON.stringify(existingLogs));
}
