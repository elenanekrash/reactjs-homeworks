const BASE_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1";

// Meal type
export interface Meal {
    id: string;
    name: string;
    category: string;
    price: number;
    image?: string;
    description?: string;
}

// Order type
export interface Order {
    id?: string;
    items: Meal[];
    total: number;
    createdAt?: string;
}

export const getMeals = async (): Promise<Meal[]> => {
    const res = await fetch(`${BASE_URL}/meals`);
    if (!res.ok) throw new Error("Failed to fetch meals");
    const data: Meal[] = await res.json();
    return data;
};

export const createOrder = async (order: Order): Promise<Order> => {
    const res = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });

    if (!res.ok) throw new Error("Failed to create order");

    const data: Order = await res.json();
    return data;
};
