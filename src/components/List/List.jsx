import React from "react";
import "./List.css";

class List extends React.Component {
    items = [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "GitHub"
    ];

    render() {
        return (
            <>
                <h1>List:</h1>
                <ul>
                    {this.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default List;