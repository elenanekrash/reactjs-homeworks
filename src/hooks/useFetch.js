import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await fetch(url, options);

                const result = await response.json();

                setData(result);

                logToLocalStorage({
                    url,
                    method: options.method || "GET",
                    payload: options.body || null,
                    status: response.status,
                    timestamp: new Date().toISOString()
                });

            } catch (err) {

                setError(err);

                logToLocalStorage({
                    url,
                    method: options.method || "GET",
                    payload: options.body || null,
                    status: "ERROR",
                    timestamp: new Date().toISOString()
                });

            } finally {
                setLoading(false);
            }

        };

        fetchData();

    }, [url]);

    return { data, loading, error };

}


/* LOGGER FUNCTION */

function logToLocalStorage(log) {

    const existingLogs =
        JSON.parse(localStorage.getItem("apiLogs")) || [];

    existingLogs.push(log);

    localStorage.setItem(
        "apiLogs",
        JSON.stringify(existingLogs)
    );

}
