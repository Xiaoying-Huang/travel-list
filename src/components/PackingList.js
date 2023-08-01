import { useState } from "react";
import Item from "./Item";

export default function PackingList({ itemList, onPackedChange, onRemove, onClear }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedList = itemList.slice();

    if (sortBy === "description") { sortedList = sortedList.sort((a, b) => a.description.localeCompare(b.description)); }
    if (sortBy === "packed") { sortedList = sortedList.sort((a, b) => Number(a.packed) - Number(b.packed)) }

    return (<>
        <div className="list">
            <ul>
                {sortedList.map((item) =>
                    <Item item={item} key={item.id}
                        onPackedChange={onPackedChange} onRemove={onRemove} />
                )}
            </ul>

            <div className="actions">
                <select aria-label="actions" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">SORT BY INPUT ORDER</option>
                    <option value="description">SORT BY DESCRIPTION</option>
                    <option value="packed">SORT BY PACKED STATUS</option>
                </select>
                <button onClick={onClear}>CLEAR LIST</button>
            </div>
        </div>
    </>);
}
