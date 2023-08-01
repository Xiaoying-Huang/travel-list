export default function Stats({ itemList }) {
    const total = itemList.length;
    const packed = itemList.filter(item => item.packed === true);
    const count = packed.length;
    return (<>
        <footer className="stats">
            <em> {(total > 0 && total === count)
                ? "You have packed everything. Le t holiday begin!🌈"
                : total > 0
                    ? `💼You have ${total} items on your list, and you already packded ${count} (${((count / total) * 100).toFixed(1)}%).`
                    : "Your list is empty. Start making your list!"
            }</em>
        </footer>
    </>);
}
