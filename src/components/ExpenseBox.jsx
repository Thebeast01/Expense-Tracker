import { useState, useEffect } from "react";
import Input from "./Input";
import Submit from "./Submit";
import OutputBox from './OutputBox';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const ExpenseBox = () => {
  const [total, setTotalPrice] = useState(0);
  const [inputValue, setInputValue] = useState({
    itemName: "",
    itemPrice: "",
  });

  const [storedItems, setStoredItems] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("items"));
    if (storedData) {
      setStoredItems(storedData);

      const total = storedData.reduce((acc, curr) => acc + curr.itemPrice, 0);
      setTotalPrice(total);
    }
  }, [inputValue]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue.itemName=='' || inputValue.itemPrice =='')
      {
        toast.error("Please Fill the input Fields")
      }
      else{

    const newItem = { itemName: inputValue.itemName, itemPrice: parseFloat(inputValue.itemPrice) };
    const updatedItems = [...storedItems, newItem];
    setStoredItems(updatedItems);
    const total = updatedItems.reduce((acc, curr) => acc + parseFloat(curr.itemPrice), 0);
    setTotalPrice(total);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setInputValue({ itemName: "", itemPrice: "" });
      }
  };
  const handleDeleteItem = (index) => {
    const updatedItems = storedItems.filter((_, i) => i !== index);
    setStoredItems(updatedItems);
    const total = updatedItems.reduce((acc, curr) => acc + curr.itemPrice, 0);
    setTotalPrice(total);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };
  return (
    <div className="h-full w-full overflow-hidden flex items-center bg-slate-900 justify-center">
      <ToastContainer/>
      <div className="flex-col bg-slate-800 w-1/3  rounded-md flex p-5">
        <h1 className='flex  items-center justify-center text-3xl p-2 mb-2  text-slate-200 ' > Expense Tracker</h1>
        <form onSubmit={handleSubmit}>
          <Input
            itemName={"Item Name"}
            name="itemName"
            value={inputValue.itemName}
            onChange={handleChange}
          />
          <Input
            itemName={"Item Price"}
            name="itemPrice"
            value={inputValue.itemPrice}
            onChange={handleChange}
          />
        <div className='w-full flex items-end justify-end gap-2 '>

          <Submit text={"Add"} />
        </div>
        </form>

        {/* Render all stored items */}
        <OutputBox data={storedItems} onDelete={handleDeleteItem} />
      <div className='w-full flex items-center justify-center '>
        <span className='flex  items-center justify-center text-xl font-semibold text-slate-200 border rounded-lg p-1 pl-4 pr-4 mt-2'>
          Rs. {total}
        </span>

      </div>
      </div>
    </div>
  );
};
export default ExpenseBox;

