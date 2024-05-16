import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";

const OutputBox = ({ data, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className='p-4 rounded-lg mt-2 bg-slate-50 text-slate-950'>
      {data.map((item, index) => (
        <div key={index} className='flex justify-between items-center'>
          <div className='font-bold text-slate-600 flex items-center gap-2'>
            {item.itemName} :<span className='text-slate-500 text-sm'>Rs. {item.itemPrice}</span>
          </div>
          <button onClick={() => handleDelete(index)}><RiDeleteBin6Fill/></button>
        </div>
      ))}
    </div>
  );
};

export default OutputBox;
