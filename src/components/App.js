import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList"
import Stats from "./Stats";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [id, setId] = useState(1);

  function handleAddItem(item) {
    const itemToAdd = { ...item, id }
    setItemList(currentList => [...currentList, itemToAdd]);
    setId(c => c + 1);
  }

  function handlePackedItem(item) {
    const updatedList = itemList.slice().map(individualItem => {
      if (individualItem.id === item.id) {
        return { ...individualItem, packed: item.packed };
      }
      return individualItem;
    });

    setItemList(currentList => updatedList);
  }

  function handleRemove(item) {
    const updatedList = itemList.filter(individualItem => individualItem.id !== item.id);
    setItemList(currentList => updatedList);

  }

  function handleClear() {
    const confirmed = window.confirm("Are you sure you want to clear everything in your list?");
    if (confirmed) {
      setItemList([]);
      setId(1);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList itemList={itemList} onPackedChange={handlePackedItem} onRemove={handleRemove} onClear={handleClear} />
      <Stats itemList={itemList} />
    </div>
  );
}






