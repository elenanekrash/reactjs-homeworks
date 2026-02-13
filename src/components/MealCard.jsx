export default function MealCard({ meal, onAdd }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow flex gap-4">
            <img
                src={meal.image}
                alt={meal.name}
                className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
                <div className="flex justify-between">
                    <h3 className="font-semibold">{meal.name}</h3>
                    <span className="text-teal-500">${meal.price}</span>
                </div>

                <p className="text-gray-500 text-sm mt-1">
                    {meal.description}
                </p>

                <div className="flex gap-2 mt-3">
                    <input
                        type="number"
                        defaultValue={1}
                        className="w-12 border rounded px-2"
                        readOnly
                    />

                    <button
                        onClick={onAdd}
                        className="bg-teal-500 text-white px-4 py-1 rounded"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
