const BASE_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1";

export const getMeals = async () => {
    const res = await fetch(`${BASE_URL}/meals`);
    if (!res.ok) throw new Error("Failed to fetch meals");
    return res.json();
};

export const createOrder = async (order) => {
    const res = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });

    return res.json();
};