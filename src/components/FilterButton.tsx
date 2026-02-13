export default function FilterButton({ title, active, onClick }: { title: string, active: boolean, onClick: (title: string) => void }) {
    return (
        <button
            onClick={() => onClick(title)}
            className={`
        px-6 py-2 rounded border
        ${
                active
                    ? "bg-teal-500 text-white"
                    : "bg-white text-gray-600"
            }
      `}
        >
            {title}
        </button>
    );
}
