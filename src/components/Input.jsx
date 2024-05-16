import React from "react";

const Input = ({ type ,itemName, onChange, value, name }) => {
  return (
    <div className="w-full mb-5">
      <input
        className="border-2 border-gray-300 w-full p-2 rounded-md"
        type= {type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={itemName}
      />
    </div>
  );
};

export default Input;
