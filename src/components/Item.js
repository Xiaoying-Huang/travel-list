export default function Item({ item, onPackedChange, onRemove }) {
    function handleChange(item) {
        const updatedItem = { ...item, packed: !item.packed }
        onPackedChange(updatedItem);
    }
    return (<li key={item.id}>
        <input type="checkbox" onChange={() => handleChange(item)}></input>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
        <button onClick={() => onRemove(item)}>❌</button>
    </li>)
}