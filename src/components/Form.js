import { useState } from "react";

export default function Form({ onAddItem }) {
    const numbers = Array.from({ length: 20 }, (v, i) => i + 1);

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();
        if (!description) { return; }

        const newItem = { description, quantity, packed: false };

        setDescription("");
        setQuantity(1);
        onAddItem(newItem);
    }

    return (<>
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your🥰 trip? </h3>
            <select
                aria-label="item-quantity"
                onChange={(e) => setQuantity(Number(e.target.value))} value={quantity}>
                {numbers.map(num => {
                    return (<option value={num} key={num}>{num}</option>);
                })}
            </select>
            <input
                type="text"
                placeholder="Item..."
                onChange={(e) => setDescription(e.target.value)}
                value={description}></input>
            <button type="submit">ADD</button>
        </form>
    </>);
}